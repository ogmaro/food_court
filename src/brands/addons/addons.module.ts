import { Module } from '@nestjs/common';
import { AddonService } from './addons.service';
import { AddonController } from './addons.controller';
import { CategorysService } from '../categorys/categorys.service';

@Module({
  controllers: [AddonController],
  providers: [AddonService, CategorysService],
})
export class AddonModule {}
