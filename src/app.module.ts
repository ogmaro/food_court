import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { BrandsModule } from './brands/brands.module';
import { CategorysModule } from './brands/categorys/categorys.module';
import { AddonModule } from './brands/addons/addons.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    BrandsModule,
    DatabaseModule,
    CategorysModule,
    AddonModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
