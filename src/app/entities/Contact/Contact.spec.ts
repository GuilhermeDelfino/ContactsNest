import { Contact, ContactAttributes } from '.';

const fullPropsCorrect: ContactAttributes = {
  cellphone: '11972595523',
  createdAt: new Date(),
  email: 'guilhermedelfino25@gmail.com',
  name: 'Guilherme Delfino',
  id: `new-id-fofo`,
};
const fullRequiredPropsCorrect: ContactAttributes = {
  cellphone: '11972595523',
  email: 'guilhermedelfino25@gmail.com',
  name: 'Guilherme Delfino',
};
describe('Contact Tests', () => {
  it('Should be create a contact', () => {
    const contact = new Contact(fullPropsCorrect);
    expect(contact).toBeTruthy();
  });

  it(`should return all attributes`, () => {
    const fullyContact = new Contact(fullPropsCorrect);
    expect(fullyContact.cellphone).toBe(fullPropsCorrect.cellphone);
    expect(fullyContact.email).toBe(
      fullPropsCorrect.email.trim().toUpperCase(),
    );
    expect(fullyContact.name).toBe(fullPropsCorrect.name);
    expect(fullyContact.createdAt).toBe(fullPropsCorrect.createdAt);
    expect(fullyContact.id).toBe(fullPropsCorrect.id);

    const onlyRequiredContact = new Contact(fullRequiredPropsCorrect);
    expect(onlyRequiredContact.createdAt).toBeTruthy();
    expect(onlyRequiredContact.id).toBeTruthy();
  });

  it(`should be return mask of cellphone number`, () => {
    const fullyContact = new Contact(fullPropsCorrect);

    expect(fullyContact.getCellphoneMask()).toBe(`(11) 97259-5523`);
  });
});
