/* eslint-disable prettier/prettier */
import { BaseModel } from './base.model';

export class CategoryModel extends BaseModel {
  static tableName = 'addons;'

  readonly name: string;
}
