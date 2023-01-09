import { Module } from '@nestjs/common';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';
import { PrismaService } from './prisma.service';
import { PrismaRepositoryContact } from './repositories/PrismaContactRepository';

@Module({
  imports: [],
  controllers: [],
  providers: [
    PrismaService,
    {
      provide: IRepositoryContact,
      useClass: PrismaRepositoryContact,
    },
  ],
  exports: [IRepositoryContact],
})
export class PrismaModule {}
