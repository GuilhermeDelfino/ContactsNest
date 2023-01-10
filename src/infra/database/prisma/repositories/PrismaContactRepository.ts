import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import {
  ContactResponse,
  IRepositoryContact,
} from 'src/app/repositories/contact.repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaRepositoryContact implements IRepositoryContact {
  constructor(private readonly prisma: PrismaService) {}
  async saveContact(contact: Contact): Promise<void> {
    const { cellphone, createdAt, email, id, name } = contact;
    if (
      await this.verifyCellphoneHasAlreadyBeenInserted(new Cellphone(cellphone))
    ) {
      throw new HttpException(
        'Contact Cellphone already has been inserted in database',
        HttpStatus.BAD_REQUEST,
      );
    }
    if (await this.verifyEmailHasAlreadyBeenInserted(new Email(email))) {
      throw new HttpException(
        `Contact Email already has been inserted in database`,
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.prisma.contact.create({
      data: {
        cellphone,
        email,
        name,
        createdAt,
        idContact: id,
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
  async listContacts(): Promise<ContactResponse[]> {
    return (await await this.prisma.contact.findMany({})).map(
      ({ cellphone, createdAt, email, idContact, name }) =>
        new ContactResponse({
          cellphone,
          createdAt,
          email,
          id: idContact,
          name,
        }),
    );
  }
  findContactByEmail(email: Email): Promise<ContactResponse> {
    throw new Error('Method not implemented.');
  }
  findContactById(id: string): Promise<ContactResponse> {
    throw new Error('Method not implemented.');
  }
  removeContact(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateContact(id: string, contact: Contact): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
