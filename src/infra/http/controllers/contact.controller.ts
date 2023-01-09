import { Body, Controller, Post } from '@nestjs/common';
import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { NameContact } from 'src/app/entities/Contact/name.entity';
import { Email } from 'src/app/entities/Email';
import { CreateContact } from 'src/app/useCases/CreateContact';
import { ContactDTO } from '../dtos/Contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private createContactUseCase: CreateContact) {}
  @Post('save')
  async saveContact(@Body() body: ContactDTO): Promise<void> {
    const { cellphone, email, name } = body;
    const contact = new Contact({
      cellphone: new Cellphone(cellphone),
      email: new Email(email),
      name: new NameContact(name),
    });
    return await this.createContactUseCase.execute(contact);
  }
}
