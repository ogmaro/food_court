/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class RoleModel extends BaseModel {
    static tableName = 'roles';
    readonly name: string;
}
