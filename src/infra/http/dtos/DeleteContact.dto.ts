import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteContactDTO {
  @IsString()
  @IsNotEmpty()
  id: string;
}
