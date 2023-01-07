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
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsOptional()
  @IsString()
  category: string;
}
