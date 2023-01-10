import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { CreateContact } from './CreateContact';

const repository = new InMemoryContactRepository();
describe('Use Case: Create Contact', () => {
  it('Should be able to create a contact', async () => {
    const createContact = new CreateContact(repository);
    await createContact.execute(
      new Contact({
        name: 'Guilherme',
        email: 'guilhermedelfino25@gmail.com',
        cellphone: '11972595523',
      }),
    );
    expect(await repository.virtualContactsBase.length).toBeGreaterThan(0);
  });
});
