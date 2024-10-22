import { IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @Length(1, 60)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
  
  @IsString()
  category: string;
}