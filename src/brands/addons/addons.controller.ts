import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpCode,
  HttpStatus,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddonService } from './addons.service';
import { CreateAddonsDto } from './dto/create-addons.dto';
import { UpdateAddonsDto } from './dto/update-addons.dto';
import { capitalize } from '../../utilities/format.string';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { UseGuards } from '@nestjs/common/decorators';
import { RolesGuard } from '../../common/guards/roles.guard';
import { Roles } from '../../common/decorators/roles.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@ApiBearerAuth()
@ApiTags('brands')
@Controller('brands/')
export class AddonController {
  constructor(private readonly addonService: AddonService) {}

  @Post(':brandId/addons')
  @HttpCode(201)
  @UsePipes(ValidationPipe)
  async create(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Body() createAddonsDto: CreateAddonsDto,
  ) {
    const addonExist = await this.addonService.getAddonByName(
      brandId,
      createAddonsDto.name,
    );

    if (addonExist) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          error: `${capitalize(
            createAddonsDto.name,
          )} addon already exist for this Brand`,
        },
        HttpStatus.CONFLICT,
      );
    }
    const addons = await this.addonService.create(brandId, createAddonsDto);
    return {
      success: true,
      message: 'Addon Successfully Created',
      data: addons,
    };
  }
  //This retrives all  meal addons from a specific brand using the brand Id
  @UseGuards(RolesGuard)
  @Roles('admin')
  @Get(':brandId/addons')
  async findAddonsByBrandId(
    @Param('brandId', new ParseIntPipe()) brandId: number,
  ) {
    const addons = await this.addonService.findAddonsByBrandId(brandId);
    return {
      success: true,
      message: addons.length
        ? 'Addon Successfully Found'
        : 'No Addon found specificed BrandId',
      data: addons,
    };
  }

  //This retrives a signle addon from a specific brand using the brand Id and addon Id
  @Get(':brandId/addons/:addonId')
  async findSingleAddon(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    const addon = await this.addonService.findSingleAddon(brandId, addonId);
    return {
      success: true,
      message: addon
        ? 'Addon Successfully Found'
        : 'No Addon found specificed AddonId',
      data: addon,
    };
  }

  @Patch(':brandId/addons/:addonId')
  @HttpCode(202)
  update(
    @Param('brandId') brandId: number,
    @Param('addonId') addonId: number,
    @Body() updateAddonsDto: UpdateAddonsDto,
  ) {
    return this.addonService.update(brandId, addonId, updateAddonsDto);
  }

  @Delete(':brandId/addons/:addonId')
  async removeByAddonId(
    @Param('brandId', new ParseIntPipe()) brandId: number,
    @Param('addonId', new ParseIntPipe()) addonId: number,
  ) {
    const isAddonDeleted = await this.addonService.removeByAddonId(
      brandId,
      addonId,
    );
    if (!isAddonDeleted) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Addon not delete. It may already have been removed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return { sucess: true, message: 'Addon Successfully Deleted', data: [] };
  }
}
