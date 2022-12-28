import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactController } from './contact.controller';

@Module({
  imports: [],
  controllers: [ContactController],
  providers: [PrismaService],
})
export class ContactModule {}
