import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from 'src/database/models/user.model';
import { ModelClass } from 'objection';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModel')
    private userModel: ModelClass<UserModel>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const { firstName, lastName, email, password } = createUserDto;
    const data = {
      firstName,
      lastName,
      email,
      roleId: 1,
      password: password,
    };
    const user = await this.userModel.query().insert(data);
    return user;
  }
  async findUserByEmail(email: string) {
    return await this.userModel.query().where('email', email).first();
  }
}
