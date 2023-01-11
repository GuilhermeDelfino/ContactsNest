import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiSecurity } from '@nestjs/swagger';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import {
  FindContactById,
  CreateContact,
  ListContact,
  FindContactByEmail,
  RemoveContact,
  UpdateContact,
} from 'src/app/useCases';
import { CreateContactDTO, DeleteContactDTO, UpdateContactDTO } from '../dtos';
@Controller('contact')
export class ContactController {
  constructor(
    private createContactUseCase: CreateContact,
    private listContacts: ListContact,
    private findByIdUseCase: FindContactById,
    private findByEmailUseCase: FindContactByEmail,
    private removeContactUseCase: RemoveContact,
    private updateContactUseCase: UpdateContact,
  ) {}
  @Post('save')
  async saveContact(@Body() body: CreateContactDTO): Promise<void> {
    const { cellphone, email, name } = body;
    const contact = new Contact({ cellphone, email, name });
    return await this.createContactUseCase.execute(contact);
  }

  @Get('list')
  async list(): Promise<Contact[]> {
    return await this.listContacts.execute();
  }

  @Get('findById/:id')
  async findById(@Param('id') id: string) {
    return await this.findByIdUseCase.execute(id);
  }
  @Get('findByEmail/:email')
  async findByEmail(@Param('email') email: string) {
    return await this.findByEmailUseCase.execute(new Email(email));
  }

  @Delete('remove')
  async removeContact(@Body() body: DeleteContactDTO) {
    await this.removeContactUseCase.execute(body.id);
  }

  @Put('update')
  async updateContact(@Body() body: UpdateContactDTO) {
    const { cellphone, email, id, name } = body;
    await this.updateContactUseCase.execute(
      id,
      new Contact({
        cellphone,
        email,
        name,
      }),
    );
  }
}
