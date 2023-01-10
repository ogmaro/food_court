import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateAuthDto } from './dto/create-auth.dto';
import { ModelClass } from 'objection';
import { AuthModel } from 'src/database/models/auth.model';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject('AuthModel')
    private authModel: ModelClass<AuthModel>,
  ) {}
  public adminRoleId = 1;

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.findUserByEmail(email);
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
    try {
      const { first_name, last_name, email, password } = createUserDto;

      const data = {
        last_name,
        first_name,
        email,
        role_id: this.adminRoleId,
        password: password,
      };
      const user = await this.authModel.query().insert(data).first();
      return user;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async findUserByEmail(email: string) {
    return await this.authModel.query().where('email', email).first();
  }
}
