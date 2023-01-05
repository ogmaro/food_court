import { Module } from '@nestjs/common';
import { BrandsService } from './brands.service';

@Module({
  providers: [BrandsService],
})
export class BrandsModule {}
