import { regexDdd } from '../../../helpers/regex';

export class Ddd {
  constructor(private _ddd: string) {
    this.isDddValid(_ddd);
  }

  private isDddValid(ddd: string, messageError = 'DDD is not valid') {
    if (!regexDdd.test(ddd)) {
      throw new Error(messageError);
    }
  }

  get value(): string {
    return this._ddd;
  }
}
