import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/Contact';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class FindContactById {
  constructor(private readonly repository: IRepositoryContact) {}
  async execute(id: string): Promise<Contact> {
    return await this.repository.findContactById(id);
  }
}
