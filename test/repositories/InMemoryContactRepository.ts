import { Cellphone } from '../../src/app/entities/Cellphone';
import { Contact } from '../../src/app/entities/Contact';
import { Email } from '../../src/app/entities/Email';
import {
  ContactResponse,
  IRepositoryContact,
} from '../../src/app/repositories/contact.repository';

export class InMemoryContactRepository implements IRepositoryContact {
  virtualContactsBase: Contact[] = [];
  async saveContact(contact: Contact): Promise<void> {
    const { email, cellphone } = contact;
    if (
      await this.verifyCellphoneHasAlreadyBeenInserted(new Cellphone(cellphone))
    ) {
      throw new Error(
        'Contact Cellphone already has been inserted in database',
      );
    }
    if (await this.verifyEmailHasAlreadyBeenInserted(new Email(email))) {
      throw new Error(`Contact Email already has been inserted in database`);
    }
    this.virtualContactsBase.push(contact);
  }
  async verifyEmailHasAlreadyBeenInserted(email: Email): Promise<boolean> {
    this.virtualContactsBase.find((c) => {
      if (c.email === email.value) return true;
    });
    return false;
  }
  async verifyCellphoneHasAlreadyBeenInserted(
    cellphone: Cellphone,
  ): Promise<boolean> {
    this.virtualContactsBase.find((c) => {
      if (c.cellphone === cellphone.value) return true;
    });
    return false;
  }
  async listContacts(): Promise<ContactResponse[]> {
    return await this.virtualContactsBase.map((c) => new ContactResponse(c));
  }
  findContactByEmail(email: Email): Promise<ContactResponse> {
    throw new Error('Method not implemented.');
  }
  findContactById(id: string): Promise<ContactResponse> {
    throw new Error('Method not implemented.');
  }
  removeContact(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  updateContact(id: string, contact: Contact): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
