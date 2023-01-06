import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ValidationPipe,
  UsePipes,
  HttpCode,
  ParseIntPipe,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('brands')
export class CategorysController {
  brandsService: any;
  constructor(private readonly categorysService: CategorysService) {}

  @Post(':brandId/addon-categories')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() createBrandDto: CreateCategoryDto,
  ) {
    const category = await this.categorysService.create(
      brandId,
      createBrandDto,
    );
    return {
      success: true,
      data: category,
    };
  }

  @Get(':brandId/addon-categories')
  async findAllCategorysById(
    @Param('brandId', new ParseIntPipe()) brandId: number,
  ) {
    const category = await this.categorysService.findAllCategorysById(+brandId);
    if (!category.length) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Addon not found',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return {
      success: true,
      data: category,
    };
  }
}
