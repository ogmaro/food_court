import { PartialType } from '@nestjs/mapped-types';
import { CreateAddonsDto } from './create-addons.dto';

export class UpdateAddonsDto extends PartialType(CreateAddonsDto) {}
