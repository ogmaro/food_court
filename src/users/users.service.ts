import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from 'src/models/user.model';
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
      password: password,
    };
    const user = await this.userModel.query().insert(data);
    return user;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findUserByEmail(email: string) {
    console.log('model');

    return await this.userModel.query().where('email', email).first();
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
