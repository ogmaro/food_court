import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';
import { RolesModule } from 'src/roles/roles.module';

@Module({
  controllers: [CategorysController],
  providers: [CategorysService],
  exports: [CategorysService],
  imports: [RolesModule],
})
export class CategorysModule {}
