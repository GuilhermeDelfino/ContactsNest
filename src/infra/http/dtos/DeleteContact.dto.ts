import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteContactDTO {
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
