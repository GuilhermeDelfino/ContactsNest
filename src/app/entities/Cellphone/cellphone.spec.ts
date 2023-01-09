import { Cellphone } from '.';

describe('Cellphone Test', () => {
  it('should be able to create a cellphone', () => {
    expect(() => new Cellphone('11972595523')).toBeTruthy();
    expect(() => new Cellphone('(11) 97259-5523')).toBeTruthy();
    expect(() => new Cellphone('41 97259-5523')).toBeTruthy();
  });

  it('should not be able to create a cellphone', () => {
    expect(() => new Cellphone('121')).toThrowError();
    expect(() => new Cellphone('21A')).toThrowError();
    expect(() => new Cellphone('(21) AAAAA-AAAA')).toThrowError();
    expect(() => new Cellphone('2111972595523')).toThrowError();
    expect(() => new Cellphone('011172595523')).toThrowError();
    expect(() => new Cellphone('21119725955231')).toThrowError();
  });

  it('should be able to get cellphone number + ddd', () => {
    expect(new Cellphone('1197259-5523').value).toBe('11972595523');
    expect(new Cellphone('11934178909').value).toBe('11934178909');
  });

  it('should be able to get masked cellphone', () => {
    expect(new Cellphone('11972595523').mask).toBe('(11) 97259-5523');
    expect(new Cellphone('21972595523').mask).toBe('(21) 97259-5523');
  });
});
