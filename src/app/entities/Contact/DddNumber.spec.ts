import { dddsNumbers } from '../../../helpers/ddd';
import { Ddd } from './DddNumber';

describe('Ddd Number of Brazil states Tests', () => {
  it('should be able to create a Ddd number', () => {
    dddsNumbers.forEach((ddd) => {
      expect(() => new Ddd(ddd)).toBeTruthy();
    });
  });
  it('should throw error when put a invalid ddd number', () => {
    expect(() => new Ddd('AA')).toThrowError();
    expect(() => new Ddd('00')).toThrowError();
    expect(() => new Ddd('AAAAAA')).toThrowError();
    expect(() => new Ddd('90')).toThrowError();
  });
  it('should be return value correct', () => {
    expect(new Ddd('11').value).toBe('11');
  });
});
