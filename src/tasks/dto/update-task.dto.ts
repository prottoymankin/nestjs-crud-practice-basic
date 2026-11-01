import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdateTaskDto {

  @IsOptional()
  @IsString({ message: 'Title must be a string.' })
  title?: string;

  @IsOptional()
  @IsString({ message: 'Description must be a string.' })
  description?: string;

};