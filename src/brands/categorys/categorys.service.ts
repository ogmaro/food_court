import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CategoryModel } from 'src/database/models/addon_categories.model';
import { ModelClass } from 'objection';
import { capitalize } from '../../utilities/format.string';

@Injectable()
export class CategorysService {
  constructor(
    @Inject('CategoryModel')
    private categoryClass: ModelClass<CategoryModel>,
  ) {}

  async create(data: { brandId: number; name: string }) {
    try {
      return await this.categoryClass.query().insert(data).first();
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

  async findAllCategorysById(brandId: number) {
    try {
      return await this.categoryClass
        .query()
        .where('brandId', brandId)
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
  async findCategoryByName(data: { brandId: number; name: string }) {
    try {
      const { brandId, name } = data;
      return await this.categoryClass
        .query()
        .where('name', capitalize(name))
        .where('brandId', brandId)
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
