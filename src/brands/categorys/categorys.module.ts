import { Module } from '@nestjs/common';
import { CategorysService } from './categorys.service';
import { CategorysController } from './categorys.controller';

@Module({
  controllers: [CategorysController],
  providers: [CategorysService]
})
export class CategorysModule {}
