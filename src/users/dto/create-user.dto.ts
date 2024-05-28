import { IsEmail, IsEnum, IsString, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEnum(['INTERN', 'ENGINEER', 'ADMIN'])
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';

  @IsEmail()
  email: string;
}
