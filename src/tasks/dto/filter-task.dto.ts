import { IsBooleanString, IsOptional } from "class-validator";

export class FilterTaskDto {

  @IsOptional()
  @IsBooleanString({ message: 'IsCompleted must be true or false.' })
  isCompleted?: string;

};