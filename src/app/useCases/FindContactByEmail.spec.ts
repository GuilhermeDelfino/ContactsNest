import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { Email } from '../entities/Email';
import { FindContactByEmail } from './FindContactByEmail';
const repo = new InMemoryContactRepository();

describe('Use Case: Find Contact By Email', () => {
  it('should be able to find contact', async () => {
    const contact = new Contact({
      cellphone: '11972595523',
      email: 'guilhermedelfino25@gmail.com',
      name: 'Guilherme Delfino',
      id: 'new-id-fofo',
      createdAt: new Date(),
    });

    const findContactByEmail = new FindContactByEmail(repo);
    repo.virtualContactsBase.push(contact);
    expect(await findContactByEmail.execute(new Email(contact.email))).toEqual(
      contact,
    );
  });
});
