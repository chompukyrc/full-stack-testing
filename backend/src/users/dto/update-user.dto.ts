import { GenderEnum } from '@prisma/client';
import {
  IsEmail,
  IsInt,
  IsString,
  Max,
  Min,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
} from 'class-validator';

export class UpdateUserDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEnum(GenderEnum)
  gender: GenderEnum;

  @IsInt()
  @Min(15)
  @Max(120)
  age: number;

  @IsString()
  @IsOptional()
  @IsPhoneNumber('TH')
  phone_number: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
