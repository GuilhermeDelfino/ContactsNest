import { Injectable } from '@nestjs/common';
import { IRepositoryContact } from '../repositories/contact.repository';
import { Contact } from '../entities/Contact';

@Injectable()
export class CreateContact {
  constructor(private readonly repository: IRepositoryContact) {}

  execute(contact: Contact): Promise<void> {
    return this.repository.saveContact(contact);
  }
}
