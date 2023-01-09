/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class BrandModel extends BaseModel {
    static tableName = 'brands'
    readonly name: string;
    readonly description: string;
    readonly user_id: number;
}
