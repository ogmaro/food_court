import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from 'src/database/models/user.model';
import { ModelClass } from 'objection';

@Injectable()
export class UsersService {
  constructor(
    @Inject('UserModel')
    private userModel: ModelClass<UserModel>,
  ) {}

  async findUserByEmail(email: string) {
    return await this.userModel.query().where('email', email).first();
  }
}
