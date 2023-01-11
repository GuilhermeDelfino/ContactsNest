import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import {
  FindContactById,
  CreateContact,
  ListContact,
  FindContactByEmail,
} from 'src/app/useCases';
import { CreateContactDTO } from '../dtos/CreateContact.dto';

@Controller('contact')
export class ContactController {
  constructor(
    private createContactUseCase: CreateContact,
    private listContacts: ListContact,
    private findByIdUseCase: FindContactById,
    private findByEmailUseCase: FindContactByEmail,
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
}
