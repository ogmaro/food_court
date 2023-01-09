/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { RoleModel } from 'src/database/models/role.model';
import { ModelClass } from 'objection';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RolesService {
  constructor(
    @Inject('RoleModel')
    private roleModel: ModelClass<RoleModel>,
    private readonly authService: AuthService
  ) {}

  async getUserRole(email: string) {
    const user = await this.authService.findUserByEmail(email);
    if(!user){
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `User with email ${email} not found`,
        },
        HttpStatus.NOT_FOUND,
      );
    }
    
    const role = await this.roleModel.query().findById(user.role_id).first();
    return role.name;
  }
}
