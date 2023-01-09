import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RolesController],
  providers: [RolesService],
  imports: [AuthModule],
  exports: [RolesService],
})
export class RolesModule {}
