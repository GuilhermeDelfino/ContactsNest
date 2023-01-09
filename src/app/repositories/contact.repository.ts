import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';

export abstract class IRepositoryContact {
  abstract saveContact(contact: Contact): Promise<void>;

  abstract verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean>;
  abstract verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean>;
  abstract listContacts(): Promise<Contact[]>;
  abstract findContactByEmail(email: Email): Promise<Contact>;
  abstract findContactById(id: string): Promise<Contact>;

  abstract removeContact(id: string): Promise<void>;

  abstract updateContact(id: string, contact: Contact): Promise<void>;
}
