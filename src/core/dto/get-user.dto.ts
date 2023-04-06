import { IsEmail, IsNotEmpty } from 'class-validator';

export class GetUserDto {
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    first_name: string;

    @IsNotEmpty()
    last_name: string;

    @IsNotEmpty()
    avatar: string;
}
