/* eslint-disable prettier/prettier */
import { Controller, Request, Post, UseGuards, ValidationPipe, HttpException, HttpStatus } from '@nestjs/common';
import { LocalAuthGuard } from '../common/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { Body, Get, UsePipes } from '@nestjs/common/decorators';
import { CreateAuthDto } from 'src/auth/dto/create-auth.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @ApiOperation({ summary: 'Get User Authentication token' })
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiBody({})
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
  @ApiOperation({ summary: 'Get a User Profile' })
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
  @ApiOperation({ summary: 'Create User ' })
  @Post('/register')
  @UsePipes(ValidationPipe)
 async  register(@Body() createUserDto: CreateAuthDto) {
    const user = await this.authService.findUserByEmail(createUserDto.email);
    
    if(user){
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'User already exist. Please login',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const newUser = await this.authService.register(createUserDto);
    return {
      success: true,
      message: 'User created successfully',
      data: [newUser]
    }
  }
}
