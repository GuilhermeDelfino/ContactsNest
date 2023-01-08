import { LengthValidator } from '.';

describe('Length Validator', () => {
  it('should be able to create a LengthValidator', () => {
    expect(() => new LengthValidator('string')).toBeTruthy();
  });
  it('should throw error when create a validate with content greather than passed by param', () => {
    const content = new LengthValidator('string');
    expect(() => content.isGreatherThan(10)).toThrowError();
  });
  it('should throw error when create a validate with content less than passed by param', () => {
    const content = new LengthValidator('VALUE');
    expect(() => content.isLessThan(2)).toThrowError();
  });
});
