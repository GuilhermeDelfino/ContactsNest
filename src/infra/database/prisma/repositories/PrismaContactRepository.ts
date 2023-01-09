import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRepositoryContact implements IRepositoryContact {
  constructor(private readonly prisma: PrismaService) {}
  async saveContact(contact: Contact): Promise<void> {
    console.log(contact.cellphone);
    if (await this.verifyCellphoneHasAlreadyBeenInserted(contact.cellphone)) {
      throw new HttpException(
        'Contact Cellphone already has been inserted in database',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (await this.verifyEmailHasAlreadyBeenInserted(contact.email)) {
      throw new HttpException(
        `Contact Email already has been inserted in database`,
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.prisma.contact.create({
      data: {
        cellphone: contact.cellphone.value,
        email: contact.email.value,
        name: contact.name,
        createdAt: contact.createdAt,
        idContact: contact.id,
      },
    });
  }
  async verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean> {
    return (
      (await this.prisma.contact.findFirst({
        where: { email: email.value },
      })) !== null
    );
  }
  async verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean> {
    return (
      (await this.prisma.contact.findFirst({
        where: { cellphone: cellphone.value },
      })) !== null
    );
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
