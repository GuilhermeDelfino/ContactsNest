import { InMemoryContactRepository } from '../../../test/repositories/InMemoryContactRepository';
import { Cellphone } from '../entities/Cellphone';
import { Contact } from '../entities/Contact';
import { NameContact } from '../entities/Contact/Name.entity';
import { Email } from '../entities/Email';
import { VerifyCellphoneHasAlreadyBeenInserted } from './VerifyCellphoneAlreadyExists';

const repository = new InMemoryContactRepository();
repository.virtualContactsBase.push(
  new Contact({
    name: new NameContact('Guilherme'),
    email: new Email('guilhermedelfino25@gmail.com'),
    cellphone: new Cellphone('11972595523'),
  }),
);
describe('Use Case: Verify if Contact Cellphone already has been inserted in database', () => {
  it('Should be return true when contact email exists in database', async () => {
    const verifyEmail = new VerifyCellphoneHasAlreadyBeenInserted(repository);
    const res = await verifyEmail.execute(new Cellphone(`11972595523`));
    expect(res).toBeTruthy();
  });
  it('Should be return false when contact cellphone not is in the database', async () => {
    const verifyEmail = new VerifyCellphoneHasAlreadyBeenInserted(repository);
    const res = await verifyEmail.execute(new Cellphone(`11909090090`));
    expect(res).toBeTruthy();
  });
});
