import { Injectable } from '@nestjs/common';
import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRepositoryContact implements IRepositoryContact {
  constructor(private readonly prisma: PrismaService) {}
  async saveContact(contact: Contact): Promise<void> {
    console.log(contact);
    await this.prisma.contact.create({
      data: {
        cellphone: contact.cellphone.value,
        email: contact.email,
        name: contact.name,
        createdAt: contact.createdAt,
        idContact: contact.id,
      },
    });
  }
  verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  listContacts(): Promise<Contact[]> {
    throw new Error('Method not implemented.');
  }
  findContactByEmail(email: Email): Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  findContactById(id: string): Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  removeContact(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateContact(id: string, contact: Contact): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
