import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { CreateBrandsDto } from './dto/create-brands.dto';
import { UpdateBrandsDto } from './dto/update-brands.dto';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}
}
