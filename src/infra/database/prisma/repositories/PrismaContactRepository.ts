import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';
import { PrismaService } from '../prisma.service';
import { Contact as ContactPrisma } from '@prisma/client';
@Injectable()
export class PrismaRepositoryContact implements IRepositoryContact {
  constructor(private readonly prisma: PrismaService) {}
  private prismaContactToEntity(contact: ContactPrisma) {
    const { cellphone, createdAt, email, idContact, name } = contact;
    return new Contact({
      cellphone,
      createdAt,
      email,
      name,
      id: idContact,
    });
  }
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
  async listContacts(): Promise<Contact[]> {
    return (await await this.prisma.contact.findMany({})).map(
      this.prismaContactToEntity,
    );
  }
  async findContactByEmail(email: Email): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { email: email.value },
    });
    if (!contact)
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    return this.prismaContactToEntity(contact);
  }
  async findContactById(id: string): Promise<Contact> {
    const contact = await this.prisma.contact.findFirst({
      where: { idContact: id },
    });
    if (!contact)
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    return this.prismaContactToEntity(contact);
  }
  async removeContact(id: string): Promise<void> {
    const contact = await this.findContactById(id);
    if (!contact)
      throw new HttpException('Contact not found', HttpStatus.NOT_FOUND);
    await this.prisma.contact.delete({ where: { idContact: id } });
  }
  async updateContact(id: string, contact: Contact): Promise<void> {
    const { cellphone, name, email } = contact;
    await this.prisma.contact.update({
      data: {
        cellphone,
        name,
        email,
      },
      where: {
        idContact: id,
      },
    });
  }
}
