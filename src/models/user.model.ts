/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class UserModel extends BaseModel {
    static tableName = 'users';
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly roleId: number;
}
