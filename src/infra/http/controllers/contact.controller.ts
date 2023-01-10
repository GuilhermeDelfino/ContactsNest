import { Body, Controller, Get, Post } from '@nestjs/common';
import { Contact } from 'src/app/entities/Contact';
import { ContactResponse } from 'src/app/repositories/contact.repository';
import { CreateContact } from 'src/app/useCases/CreateContact';
import { ListContact } from 'src/app/useCases/ListContacts';
import { ContactDTO } from '../dtos/Contact.dto';

@Controller('contact')
export class ContactController {
  constructor(
    private createContactUseCase: CreateContact,
    private listContacts: ListContact,
  ) {}
  @Post('save')
  async saveContact(@Body() body: ContactDTO): Promise<void> {
    const { cellphone, email, name } = body;
    const contact = new Contact({ cellphone, email, name });
    return await this.createContactUseCase.execute(contact);
  }

  @Get('list')
  async list(): Promise<ContactResponse[]> {
    return await this.listContacts.execute();
  }
}
