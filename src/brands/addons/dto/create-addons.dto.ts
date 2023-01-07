import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateAddonsDto {
  @IsNotEmpty()
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
