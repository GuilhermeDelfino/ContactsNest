import { Cellphone } from 'src/app/entities/Cellphone';
import { Contact } from 'src/app/entities/Contact';
import { Email } from 'src/app/entities/Email';
import { IRepositoryContact } from 'src/app/repositories/contact.repository';

export class InMemoryContactRepository implements IRepositoryContact {
  virtualContactsBase: Contact[] = [];
  async saveContact(contact: Contact): Promise<void> {
    if (await this.verifyCellphoneHasAlreadyBeenInserted(contact.cellphone)) {
      throw new Error(
        'Contact Cellphone already has been inserted in database',
      );
    }
    if (await this.verifyEmailHasAlreadyBeenInserted(contact.email)) {
      throw new Error(`Contact Email already has been inserted in database`);
    }
    this.virtualContactsBase.push(contact);
  }
  async verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean> {
    this.virtualContactsBase.find((c) => {
      if (c.email.value === email.value) return true;
    });
    return false;
  }
  async verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean> {
    this.virtualContactsBase.forEach((c) => {
      if (c.cellphone.value === cellphone.value) return true;
    });
    return false;
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
