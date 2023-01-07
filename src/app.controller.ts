import { Controller, Get, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }
  // @Post(':brandId/addons')
  // getHllo(): string {
  //   return this.appService.getHello();
  // }
  // @Get(':brandId/addons')
  // getHelo(): string {
  //   return this.appService.getHello();
  // }
  // @Get(':brandId/addons/:addonId')
  // getHell(): string {
  //   return this.appService.getHello();
  // }
  // @Patch(':brandId/addons/addonId')
  // getello(): string {
  //   return this.appService.getHello();
  // }
}
