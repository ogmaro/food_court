import { Injectable, Inject } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ModelClass } from 'objection';
import { UserModel } from 'src/database/models/user.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject('UserModel')
    private userModel: ModelClass<UserModel>,
  ) {}
  public adminRoleId = 1;

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findUserByEmail(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
  async login(user: { email: string; id: number }) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createUserDto: CreateAuthDto) {
    const { first_name, last_name, email, password } = createUserDto;

    const data = {
      last_name,
      first_name,
      email,
      role_id: this.adminRoleId,
      password: password,
    };
    const user = await this.userModel.query().insert(data);
    return user;
  }
  async findUserByEmail(email: string) {
    return await this.userModel.query().where('email', email).first();
  }
}
