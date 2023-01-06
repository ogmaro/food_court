import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { CategoryModel } from 'src/models/addon_categories.model';
import { ModelClass } from 'objection';

@Injectable()
export class CategorysService {
  constructor(
    @Inject('CategoryModel')
    private categoryClass: ModelClass<CategoryModel>,
  ) {}

  async create(brandId: number, CreateCategoryDto: CreateCategoryDto) {
    try {
      const data = {
        name: CreateCategoryDto.name,
        brandId,
      };
      return await this.categoryClass.query().insert(data).returning('*');
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
}
