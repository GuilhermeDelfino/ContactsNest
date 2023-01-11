import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateContactDTO } from './CreateContact.dto';

export class UpdateContactDTO extends CreateContactDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: true,
    example: 'new-api-id',
    title: 'Contact ID',
    description: `Its a UUID.`,
  })
  id: string;
}
