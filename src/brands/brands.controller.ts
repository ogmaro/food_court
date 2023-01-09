import { Controller } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Controller()
export class BrandsController {
  constructor(private readonly brandsService: BrandsService) {}
}
