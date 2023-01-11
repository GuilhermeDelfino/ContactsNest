import { Module } from '@nestjs/common';
import {
  CreateContact,
  FindContactByEmail,
  FindContactById,
  ListContact,
  RemoveContact,
  UpdateContact,
} from 'src/app/useCases';
import { DatabaseModule } from '../database/database.module';
import { ContactController } from './controllers/contact.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactController],
  providers: [
    FindContactByEmail,
    CreateContact,
    ListContact,
    FindContactById,
    RemoveContact,
    UpdateContact,
  ],
})
export class HttpModule {}
