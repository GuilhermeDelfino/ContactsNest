import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/Contact';
import { Email } from '../entities/Email';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class FindContactByEmail {
  constructor(private readonly repository: IRepositoryContact) {}
  async execute(email: Email): Promise<Contact> {
    return await this.repository.findContactByEmail(email);
  }
}
