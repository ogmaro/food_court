/* eslint-disable prettier/prettier */
import { Inject, Injectable } from '@nestjs/common';
import { RoleModel } from 'src/database/models/role.model';
import { ModelClass } from 'objection';
import { UsersService } from '../users/users.service';

@Injectable()
export class RolesService {
  constructor(
    @Inject('RoleModel')
    private roleModel: ModelClass<RoleModel>,
    private readonly userService: UsersService
  ) {}

  async getUserRole(email: string) {
    const user = await this.userService.findUserByEmail(email);
    console.log(user)
    const role = await this.roleModel.query().findById(user.roleId).first();
    return role.name;
  }
}
