import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/Contact';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class UpdateContact {
  constructor(private readonly repository: IRepositoryContact) {}

  async execute(id: string, newContact: Omit<Contact, 'id'>): Promise<void> {
    await this.repository.updateContact(id, newContact);
  }
}
