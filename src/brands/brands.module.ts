import { Module } from '@nestjs/common';
import { BrandsService } from '../../brands.service';
import { BrandsController } from './brands.controller';
import { AddonModule } from './addons/addons.module';

@Module({
  controllers: [BrandsController],
  providers: [BrandsService],
  imports: [AddonModule],
})
export class BrandsModule {}
