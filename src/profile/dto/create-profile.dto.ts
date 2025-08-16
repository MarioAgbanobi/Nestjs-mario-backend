import {
    IsDate,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateProfileDto {
  @IsString({ message: 'Name should be a string value.' })
  @IsNotEmpty({ message: 'Name should not be empty.' })
  @IsOptional()
  @MinLength(3, { message: 'Name should have a minimum of 3 characters.' })
  @MaxLength(100)
  firstName?: string;

  @IsString({ message: 'Name should be a string value.' })
  @IsNotEmpty({ message: 'Name should not be empty.' })
  @IsOptional()
  @MinLength(3, { message: 'Name should have a minimum of 3 characters.' })
  @MaxLength(100)
  lastName?: string;

  @IsString()
  @IsOptional()
  @MaxLength(10)
  gender?: string;

  @IsOptional()
  @IsDate()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsString()
  @IsOptional()
  profileImage?: string;
}
