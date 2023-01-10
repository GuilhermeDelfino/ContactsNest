import { NameContact } from './Name.entity';

const minLength = NameContact.MIN_LENGTH;
const maxnLength = NameContact.MAX_LENGTH;
describe('Contact Name', () => {
  it(`should be able to create a name valid`, () => {
    expect(() => new NameContact(`G`.repeat(minLength))).not.toThrowError();
    expect(() => new NameContact(`G`.repeat(maxnLength))).not.toThrowError();
    expect(() => new NameContact(`Guilherme Delfino`)).not.toThrowError();
  });

  it(`should be to throw an error lenght when name is less than ${minLength}`, () => {
    expect(() => new NameContact(`G`.repeat(minLength - 1))).toThrowError();
  });
  it(`should be to throw an error lenght when name is greather than ${maxnLength}`, () => {
    expect(() => new NameContact(`G`.repeat(maxnLength + 1))).toThrowError();
  });
});
