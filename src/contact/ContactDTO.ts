import {
  IsNotEmpty,
  Length,
  IsEmail,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class ContactDTO {
  @IsNotEmpty()
  @IsString()
  @Length(4, 50)
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @Length(10, 100)
  email: string;

  @IsNotEmpty()
  @IsString()
  @Length(8, 100)
  password: string;

  @IsNotEmpty()
  @IsPhoneNumber('BR')
  @Length(10, 11)
  cellphone: string;
}
