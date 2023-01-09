/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
    static tableName = 'users';
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
    readonly roleId: number;
}
