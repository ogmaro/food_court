/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class CategoryModel extends BaseModel {
  static tableName = 'addon_categories';

  readonly id: number;
  readonly name: string;
  readonly brandId: number
}
