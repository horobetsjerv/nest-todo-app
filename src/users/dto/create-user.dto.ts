import { IsString, IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 60)
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

    
}
