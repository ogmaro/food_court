import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAddonsDto } from './dto/create-addons.dto';
import { UpdateAddonsDto } from './dto/update-addons.dto';
import { capitalize } from '../../utilities/format.string';
import { AddonModel } from 'src/database/models/addon.model';
import { CategoryModel } from 'src/database/models/addon_categories.model';
import { ModelClass } from 'objection';
import { CategorysService } from '../categorys/categorys.service';

@Injectable()
export class AddonService {
  constructor(
    @Inject('AddonModel')
    private addonModel: ModelClass<AddonModel>,
    @Inject('CategoryModel')
    private categoryModel: ModelClass<CategoryModel>,
    private readonly categoryService: CategorysService,
  ) {}
  async create(brandId: number, createAddonsDto: CreateAddonsDto) {
    try {
      const { name, description, price, category } = createAddonsDto;
      const getCategory = await this.categoryService.findCategoryByName({
        brand_id: brandId,
        name: category,
      });

      if (!getCategory) {
        await this.categoryService.create({
          brand_id: brandId,
          name: category,
        });

        return this.create(brandId, createAddonsDto);
      }

      const data = {
        name: capitalize(name),
        description,
        price,
        category_id: getCategory.id,
        brand_id: brandId,
      };

      return await this.addonModel.query().insert(data).first();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  //This retrives all  meal addons from a specific brand
  async findAddonsByBrandId(brandId: number) {
    try {
      return await this.addonModel
        .query()
        .where('brand_id', brandId)
        .orderBy('name')
        .limit(10);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findSingleAddon(brandId: number, addonId: number) {
    try {
      return await this.addonModel
        .query()
        .where('id', addonId)
        .where('brand_id', brandId)
        .first();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    brandId: number,
    addonId: number,
    updateAddonsDto: UpdateAddonsDto,
  ) {
    const { name, description, price, category } = updateAddonsDto;
    if (!category) {
      const data = {
        name,
        description,
        price,
        brand_id: brandId,
      };
      const updateAddon = await this.addonModel
        .query()
        .patch(data)
        .where('brand_id', brandId)
        .where('id', addonId)
        .returning('*')
        .first();
      return updateAddon;
    }
    const categoryId = await this.categoryService.findCategoryByName({
      brand_id: brandId,
      name: category,
    });
    if (!categoryId) {
      await this.categoryService.create({
        brand_id: brandId,
        name: category,
      });
      return this.update(brandId, addonId, updateAddonsDto);
    }

    const data = {
      name,
      description,
      price,
      category_id: categoryId.id,
      brand_id: brandId,
    };
    const updateAddon = await this.addonModel
      .query()
      .patch(data)
      .where('brand_id', brandId)
      .where('id', addonId)
      .returning('*')
      .first();
    return updateAddon;
  }

  async removeByAddonId(brandId: number, addonId: number) {
    try {
      const isAddonDeleted = await this.addonModel
        .query()
        .where('id', addonId)
        .where('brand_id', brandId)
        .delete();
      return isAddonDeleted;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async getAddonByName(brandId: number, addonName: string) {
    try {
      return await this.addonModel
        .query()
        .where('name', capitalize(addonName))
        .where('brand_id', brandId)
        .first();
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
