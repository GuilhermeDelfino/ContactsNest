import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import { IRepositoryContact } from 'src/app/repositories/IRepositoryContact';

export class InMemoryContactRepository implements IRepositoryContact {
  virtualContactsBase: Contact[] = [];
  async saveContact(contact: Contact): Promise<void> {
    this.virtualContactsBase.push(contact);
    console.log('User has been inserted');
  }
  verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  listContacts(): Promise<Contact[]> {
    throw new Error('Method not implemented.');
  }
  findContactByEmail(email: Email): Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  findContactById(id: string): Promise<Contact> {
    throw new Error('Method not implemented.');
  }
  removeContact(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateContact(id: string, contact: Contact): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
