import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { ListContact } from './ListContacts';

const repository = new InMemoryContactRepository();
const date = new Date();
const mockContact = new Contact({
  name: 'Guilherme',
  email: 'guilhermedelfino25@gmail.com',
  cellphone: '11972595523',
  id: `new-id-fofo`,
  createdAt: date,
});
repository.virtualContactsBase.push(mockContact);
describe('Use Case: List Contacts', () => {
  it('should be return all contacts', async () => {
    const list = new ListContact(repository);
    expect(await list.execute()).toEqual(repository.virtualContactsBase);
  });
});
