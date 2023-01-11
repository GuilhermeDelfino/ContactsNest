import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { FindContactById } from './FindContactById';
const repo = new InMemoryContactRepository();

describe('Use Case: Find Contact By Id', () => {
  it('should be able to find contact', async () => {
    const contact = new Contact({
      cellphone: '11972595523',
      email: 'guilhermedelfino25@gmail.com',
      name: 'Guilherme Delfino',
      id: 'new-id-fofo',
      createdAt: new Date(),
    });

    const useCase = new FindContactById(repo);
    repo.virtualContactsBase.push(contact);
    expect(await useCase.execute(contact.id)).toEqual(contact);
  });
});
