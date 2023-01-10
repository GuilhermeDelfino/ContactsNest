import { Injectable } from '@nestjs/common';
import {
  ContactResponse,
  IRepositoryContact,
} from '../repositories/contact.repository';

@Injectable()
export class ListContact {
  constructor(private readonly repository: IRepositoryContact) {}
  async execute(): Promise<ContactResponse[]> {
    return await this.repository.listContacts();
  }
}
