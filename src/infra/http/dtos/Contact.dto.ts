import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { NameContact } from 'src/app/entities/Contact/Name.entity';
import { Email } from 'src/app/entities/Email';
export class ContactDTO {
  @IsNotEmpty()
  @IsString()
  @Length(NameContact.MIN_LENGTH, NameContact.MAX_LENGTH)
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(Email.MIN_LENGTH, Email.MAX_LENGTH)
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @Length(11, 11)
  cellphone: string;
}
