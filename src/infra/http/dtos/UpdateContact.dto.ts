import { IsNotEmpty, IsString } from 'class-validator';
import { CreateContactDTO } from './CreateContact.dto';

export class UpdateContactDTO extends CreateContactDTO {
  @IsString()
  @IsNotEmpty()
  id: string;
}
