import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsNotEmpty,
  Length,
} from 'class-validator';
import { NameContact } from 'src/app/entities/Contact/Name.entity';
import { Email } from 'src/app/entities/Email';
export class CreateContactDTO {
  @IsNotEmpty()
  @IsString()
  @Length(NameContact.MIN_LENGTH, NameContact.MAX_LENGTH)
  @ApiProperty({
    minLength: NameContact.MIN_LENGTH,
    maxLength: NameContact.MAX_LENGTH,
    required: true,
    example: 'Guilherme Narciso',
    title: 'Contact Name',
  })
  name: string;

  @IsNotEmpty()
  @IsEmail()
  @Length(Email.MIN_LENGTH, Email.MAX_LENGTH)
  @ApiProperty({
    minLength: Email.MIN_LENGTH,
    maxLength: Email.MAX_LENGTH,
    required: true,
    example: 'guilhermedelfino25@gmail.com',
    title: 'Contact E-mail',
  })
  email: string;

  @IsPhoneNumber('BR')
  @IsNotEmpty()
  @Length(11, 11)
  @ApiProperty({
    minLength: 11,
    maxLength: 11,
    required: true,
    example: '11972595523',
    title: 'Contact Cellphone Number',
    description: `Just numbers please.`,
  })
  cellphone: string;
}
