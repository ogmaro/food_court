import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UsePipes } from '@nestjs/common/decorators';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
