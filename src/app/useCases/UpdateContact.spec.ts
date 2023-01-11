import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { UpdateContact } from './UpdateContact';

const repo = new InMemoryContactRepository();
const contact = new Contact({
  cellphone: '11972595523',
  email: 'guilhermedelfino25@gmail.com',
  name: 'Guilherme Delfino',
  id: 'new-id-fofo',
  createdAt: new Date(),
});

describe('Use Case: update Contact', () => {
  it('should be able to update a contact', async () => {
    repo.virtualContactsBase.push(contact);
    const useCase = new UpdateContact(repo);
    const newContact = new Contact({
      cellphone: '11972595522',
      email: 'guilhermedelfino25@email.com',
      name: 'Delfino',
      id: contact.id,
      createdAt: contact.createdAt,
    });
    await useCase.execute(contact.id, newContact);
    expect(await repo.findContactById(contact.id)).toEqual(newContact);
  });
});
