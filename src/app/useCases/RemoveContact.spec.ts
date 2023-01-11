import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { RemoveContact } from './RemoveContact';

const repo = new InMemoryContactRepository();
const contact = new Contact({
  cellphone: '11972595523',
  email: 'guilhermedelfino25@gmail.com',
  name: 'Guilherme Delfino',
  id: 'new-id-fofo',
  createdAt: new Date(),
});

describe('Use Case: Remove Contact', () => {
  it('should be able to remove a contact', async () => {
    repo.virtualContactsBase.push(contact);
    const useCase = new RemoveContact(repo);

    await useCase.execute(contact.id);
    expect(await repo.virtualContactsBase).toEqual([]);
  });
});
