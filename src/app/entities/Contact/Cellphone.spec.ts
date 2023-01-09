import { Cellphone } from './Cellphone';
import { Ddd } from './DddNumber';

describe('Cellphone Test', () => {
  it('should be able to create a cellphone', () => {
    expect(
      () =>
        new Cellphone({
          cellphone: '972595523',
          ddd: new Ddd('11'),
        }),
    ).toBeTruthy();
    expect(
      () => new Cellphone({ cellphone: '972595523', ddd: new Ddd('21') }),
    ).toBeTruthy();
    expect(
      () => new Cellphone({ cellphone: '97259-5523', ddd: new Ddd('41') }),
    ).toBeTruthy();
  });

  it('should not be able to create a cellphone', () => {
    expect(
      () => new Cellphone({ cellphone: '1', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: 'A', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: 'AAAAAAAAA', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: '(11) 97259-5523', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: '1172595523', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: '1172595523', ddd: new Ddd('21') }),
    ).toThrowError();
    expect(
      () => new Cellphone({ cellphone: '119725955231', ddd: new Ddd('21') }),
    ).toThrowError();
  });

  it('should be able to get cellphone number + ddd', () => {
    expect(
      new Cellphone({ cellphone: '97259-5523', ddd: new Ddd('11') }).value,
    ).toBe('11972595523');
    expect(
      new Cellphone({ cellphone: '934178909', ddd: new Ddd('11') }).value,
    ).toBe('11934178909');
  });

  it('should be able to get masked cellphone', () => {
    expect(
      new Cellphone({ cellphone: '972595523', ddd: new Ddd('11') }).mask,
    ).toBe('(11) 97259-5523');
    expect(
      new Cellphone({ cellphone: '972595523', ddd: new Ddd('21') }).mask,
    ).toBe('(21) 97259-5523');
  });
});
