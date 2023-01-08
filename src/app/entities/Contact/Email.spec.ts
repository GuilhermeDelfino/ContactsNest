import { Email } from './Email';

const minLength = Email.MIN_LENGTH;
const maxnLength = Email.MAX_LENGTH;
describe('Contact Name', () => {
  it(`should be able to create a name valid`, () => {
    expect(() => new Email(`guilherme@gmail.com`)).not.toThrowError();
    expect(() => new Email(`gui20@gmail.com`)).not.toThrowError();
    expect(() => new Email(`guilherme@sptech.school`)).not.toThrowError();
  });

  it(`should be to throw an error lenght when name is less than ${minLength}`, () => {
    expect(() => new Email(`G`.repeat(minLength - 1))).toThrowError();
  });
  it(`should be to throw an error lenght when name is greather than ${maxnLength}`, () => {
    expect(() => new Email(`G`.repeat(maxnLength + 1))).toThrowError();
  });
  it(`should throw an error when put an invalid email`, () => {
    expect(() => new Email('guilherme')).toThrowError();
    expect(() => new Email('2332')).toThrowError();
    expect(() => new Email('guilherme@')).toThrowError();
    expect(() => new Email('guilherme.com')).toThrowError();
    expect(() => new Email('guilherme#google.com')).toThrowError();
    expect(() => new Email('@accenture.com')).toThrowError();
  });
});
