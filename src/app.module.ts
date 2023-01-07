import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BrandsModule } from './brands/brands.module';
import { CategorysModule } from './brands/categorys/categorys.module';
import { AddonModule } from './brands/addons/addons.module';

@Module({
  imports: [BrandsModule, DatabaseModule, CategorysModule, AddonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
