import { Module } from '@nestjs/common';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';
import { CreateContact } from 'src/app/useCases/CreateContact';
import { ListContact } from 'src/app/useCases/ListContacts';
import { DatabaseModule } from '../database/database.module';
import { PrismaModule } from '../database/prisma/prisma.module';
import { PrismaService } from '../database/prisma/prisma.service';
import { PrismaRepositoryContact } from '../database/prisma/repositories/PrismaContactRepository';
import { ContactController } from './controllers/contact.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [CreateContact, ListContact],
})
export class HttpModule {}
