import { IsString, IsNotEmpty, IsInt, IsOptional } from 'class-validator';

export class CreateBrandsDto {
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
