import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/Contact';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class ListContact {
  constructor(private readonly repository: IRepositoryContact) {}
  async execute(): Promise<Contact[]> {
    return await this.repository.listContacts();
  }
}
