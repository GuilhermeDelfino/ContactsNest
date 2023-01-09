import { Injectable } from '@nestjs/common';
import { Email } from '../entities/Email';
import { IRepositoryContact } from '../repositories/contact.repository';

@Injectable()
export class VerifyEmailHasAlreadyBeenInserted {
  constructor(private readonly repository: IRepositoryContact) {}

  async execute(email: Email): Promise<boolean> {
    return await !!this.repository.verifyEmailHasAlreadyBeenInserted(email);
  }
}
