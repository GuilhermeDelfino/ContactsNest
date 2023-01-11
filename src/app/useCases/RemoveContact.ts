import { Injectable } from '@nestjs/common';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class RemoveContact {
  constructor(private readonly repository: IRepositoryContact) {}

  async execute(id: string): Promise<void> {
    await this.repository.removeContact(id);
  }
}
