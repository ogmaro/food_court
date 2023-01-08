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
import { capitalize } from '../../utilities/format.string';

@Controller('brands')
export class CategorysController {
  constructor(private readonly categorysService: CategorysService) {}

  @Post(':brandId/addon-categories')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() createBrandDto: CreateCategoryDto,
  ) {
    const data = {
      name: capitalize(createBrandDto.name),
      brandId,
    };
    const categoryExist = await this.categorysService.findCategoryByName(data);
    if (categoryExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: 'Category already exist for this Brand',
        },
        HttpStatus.CONFLICT,
      );
    }
    const category = await this.categorysService.create(data);
    return {
      success: true,
      message: 'Category succesfully created',
      data: category,
    };
  }

  @Get(':brandId/addon-categories')
  async findAllCategorysById(
    @Param('brandId', new ParseIntPipe()) brandId: number,
  ) {
    const category = await this.categorysService.findAllCategorysById(+brandId);

    return {
      success: true,
      message: category.length ? 'Category found' : 'No Category found',
      data: category,
    };
  }
  @Get(':brandId/addon-categories/:name')
  async findCategoryByName(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('name', new ParseIntPipe()) name: string,
  ) {
    const data = {
      brandId,
      name,
    };
    const category = await this.categorysService.findCategoryByName(data);

    return {
      success: true,
      message: category ? 'Category found' : 'No Category found',
      data: category,
    };
  }
}
