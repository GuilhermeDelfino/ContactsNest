import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact, ContactAttributes } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';

export class ContactResponse {
  name: string;
  cellphone: string;
  email: string;
  id: string;
  createdAt: Date;
  constructor(props: ContactAttributes) {
    Object.assign(this, props);
  }
}

export abstract class IRepositoryContact {
  abstract saveContact(contact: Contact): Promise<void>;

  abstract verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean>;
  abstract verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean>;
  abstract listContacts(): Promise<ContactResponse[]>;
  abstract findContactByEmail(email: Email): Promise<ContactResponse>;
  abstract findContactById(id: string): Promise<ContactResponse>;

  abstract removeContact(id: string): Promise<void>;

  abstract updateContact(id: string, contact: Contact): Promise<void>;
}
