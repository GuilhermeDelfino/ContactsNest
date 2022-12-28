import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { Contact, PrismaPromise, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactDTO } from './ContactDTO';

@Controller('contacts')
export class ContactController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/list')
  async listAll(): Promise<Contact[]> {
    return await this.prisma.contact.findMany();
  }

  @Post('/create')
  async create(@Body() contact: ContactDTO): Promise<void | string> {
    const isAbleToCreate = await this.isContactAbleToCreate(contact);
    if (isAbleToCreate) {
      await this.prisma.contact.create({
        data: contact,
      });
    }
  }

  private async isContactAbleToCreate(contact: ContactDTO): Promise<boolean> {
    const { cellphone, email } = contact;

    if (await this.isContactCellphoneUnique(cellphone)) {
      throw new HttpException(
        `Contact's cellphone already have been inserted in system`,
        HttpStatus.BAD_REQUEST,
      );
    }
    if (await this.isContactEmailUnique(email)) {
      throw new HttpException(
        `Contact's e-mail already have been inserted in system`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return true;
  }
  private async isContactEmailUnique(email: string): Promise<boolean> {
    const contact = await this.prisma.contact.findFirst({
      where: {
        email,
      },
    });
    return contact === null ? false : true;
  }
  private async isContactCellphoneUnique(cellphone: string): Promise<boolean> {
    const contact = await this.prisma.contact.findFirst({
      where: {
        cellphone,
      },
    });
    return contact === null ? false : true;
  }
}
