import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto{
    @IsNumber()
    id: number;

    @IsString({message: 'Name should be a string value.'})
    @IsNotEmpty({message: 'Name should not be empty.'})
    @MinLength(3, {message: 'Name should have a minimum of 3 characters.'})
    name: string;

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    gender?: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsBoolean()
    isMarried: boolean;
}