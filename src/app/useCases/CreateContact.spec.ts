import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Cellphone } from '../entities/Cellphone';
import { Contact } from '../entities/Contact';
import { NameContact } from '../entities/Contact/Name.entity';
import { Email } from '../entities/Email';
import { CreateContact } from './CreateContact';

const repository = new InMemoryContactRepository();
describe('Use Case: Create Contact', () => {
  it('Should be able to create a contact', async () => {
    const createContact = new CreateContact(repository);
    await createContact.execute(
      new Contact({
        name: new NameContact('Guilherme'),
        email: new Email('guilhermedelfino25@gmail.com'),
        cellphone: new Cellphone('11972595523'),
      }),
    );
    expect(await repository.virtualContactsBase.length).toBeGreaterThan(0);
  });
});
