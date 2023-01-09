import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  last_name: string;

  @IsNotEmpty()
  @MinLength(6)
  @ApiProperty()
  password: string;
}
