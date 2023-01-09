import { Contact, PropsContact } from '.';
import { Cellphone } from '../Cellphone';
import { Email } from '../Email';
import { NameContact as Name } from './name.entity';

const fullPropsCorrect: PropsContact = {
  cellphone: new Cellphone('11972595523'),
  createdAt: new Date(),
  email: new Email('guilhermedelfino25@gmail.com'),
  name: new Name('Guilherme Delfino'),
  _id: `new-id-fofo`,
};
const fullRequiredPropsCorrect: PropsContact = {
  cellphone: new Cellphone('11972595523'),
  email: new Email('guilhermedelfino25@gmail.com'),
  name: new Name('Guilherme Delfino'),
};
describe('Contact Tests', () => {
  it('Should be create a contact', () => {
    const contact = new Contact(fullPropsCorrect);
    expect(contact).toBeTruthy();
  });

  it(`should return all attributes`, () => {
    const fullyContact = new Contact(fullPropsCorrect);
    expect(fullyContact.cellphone).toBe(fullPropsCorrect.cellphone);
    expect(fullyContact.email).toBe(fullPropsCorrect.email.value);
    expect(fullyContact.name).toBe(fullPropsCorrect.name.value);
    expect(fullyContact.createdAt).toBe(fullPropsCorrect.createdAt);
    expect(fullyContact.id).toBe(fullPropsCorrect._id);

    const onlyRequiredContact = new Contact(fullRequiredPropsCorrect);
    expect(onlyRequiredContact.createdAt).toBeTruthy();
    expect(onlyRequiredContact.id).toBeTruthy();
  });
});
