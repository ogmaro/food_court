/* eslint-disable prettier/prettier */
import { Model } from 'objection';

export class BaseModel extends Model {
  readonly id: number;
}