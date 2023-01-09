import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CategoryModel } from 'src/database/models/addon_categories.model';
import { ModelClass } from 'objection';
import { capitalize } from '../../utilities/format.string';

@Injectable()
export class CategorysService {
  constructor(
    @Inject('CategoryModel')
    private categoryModel: ModelClass<CategoryModel>,
  ) {}

  async create(data: { brand_id: number; name: string }) {
    try {
      return await this.categoryModel.query().insert(data).first();
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

  async findAllCategorysById(brand_id: number) {
    try {
      return await this.categoryModel
        .query()
        .where('brand_id', brand_id)
        .orderBy('name')
        .limit(10);
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
  async findCategoryByName(data: { brand_id: number; name: string }) {
    try {
      const { brand_id, name } = data;
      return await this.categoryModel
        .query()
        .where('name', capitalize(name))
        .where('brand_id', brand_id)
        .first();
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
}
