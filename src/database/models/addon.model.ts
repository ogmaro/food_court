/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class AddonModel extends BaseModel {
    static tableName = 'addons'
    readonly name: string;
    readonly description?: string;
    readonly price: number;
    readonly category_id?: number;
    readonly brand_id: number;
}
