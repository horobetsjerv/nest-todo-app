import { IsNotEmpty, IsString, Length } from "class-validator";

export class LoginDto {
  @IsString()
  @Length(1, 60)
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
