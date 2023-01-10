import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Contact } from '../entities/Contact';
import { Email } from '../entities/Email';
import { VerifyEmailHasAlreadyBeenInserted } from './VerifyEmailAlreadyExists';

const repository = new InMemoryContactRepository();
repository.virtualContactsBase.push(
  new Contact({
    name: 'Guilherme',
    email: 'guilhermedelfino25@gmail.com',
    cellphone: '11972595523',
  }),
);
describe('Use Case: Verify if Contact Email already has been inserted in database', () => {
  it('Should be return true when contact email exists in database', async () => {
    const verifyEmail = new VerifyEmailHasAlreadyBeenInserted(repository);
    const res = await verifyEmail.execute(
      new Email('guilhermedelfino25@gmail.com'),
    );
    expect(res).toBeTruthy();
  });
  it('Should be return false when contact email not is in the database', async () => {
    const verifyEmail = new VerifyEmailHasAlreadyBeenInserted(repository);
    const res = await verifyEmail.execute(new Email('guilherme@gmail.om'));
    expect(res).toBeTruthy();
  });
});
