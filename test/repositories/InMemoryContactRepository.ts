import { Cellphone } from '../../src/app/entities/Cellphone';
import { Contact } from '../../src/app/entities/Contact';
import { Email } from '../../src/app/entities/Email';
import { IRepositoryContact } from '../../src/app/repositories/contact.repository';

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
  async listContacts(): Promise<Contact[]> {
    return await this.virtualContactsBase;
  }
  async findContactByEmail(email: Email): Promise<Contact> {
    return await this.virtualContactsBase.find(
      (c) => c.email.trim().toUpperCase() === email.value,
    );
  }
  async findContactById(id: string): Promise<Contact> {
    return await this.virtualContactsBase.find((c) => c.id === id);
  }
  async removeContact(id: string): Promise<void> {
    const contact = await this.findContactById(id);
    const index = this.virtualContactsBase.indexOf(contact);
    if (index > -1) this.virtualContactsBase.splice(index, 1);
  }
  async updateContact(id: string, newContact: Contact): Promise<void> {
    const contact = await this.findContactById(id);
    const index = this.virtualContactsBase.indexOf(contact);

    this.virtualContactsBase[index] = newContact;
  }
}
