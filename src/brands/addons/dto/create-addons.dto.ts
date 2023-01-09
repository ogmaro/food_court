import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsInt,
  IsOptional,
  MinLength,
} from 'class-validator';

export class CreateAddonsDto {
  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  @ApiProperty()
  name: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  description: string;

  @IsNotEmpty()
  @IsInt()
  @ApiProperty()
  price: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  category: string;
}
