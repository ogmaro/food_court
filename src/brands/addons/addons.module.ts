import { Module } from '@nestjs/common';
import { AddonService } from './addons.service';
import { AddonController } from './addons.controller';
import { CategorysService } from '../categorys/categorys.service';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [AddonController],
  providers: [AddonService, CategorysService],
  imports: [RolesModule],
})
export class AddonModule {}
