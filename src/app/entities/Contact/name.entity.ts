import { LengthValidator } from '../../../helpers/validations/LengthValidator';

export class NameContact {
  static MIN_LENGTH = 4;
  static MAX_LENGTH = 100;
  // rules
  // > 4 < 100
  // builder
  private lengthValidator: LengthValidator;
  constructor(private _name: string) {
    this.lengthValidator = new LengthValidator(_name);
    this.isNameValid();
  }

  private isNameValid(): boolean {
    return this.isNameLenghtValid();
  }

  private isNameLenghtValid(): boolean {
    return this.isNameLengthLessThanMin() && this.isNameLengthGreatherThanMax();
  }

  private isNameLengthLessThanMin(): boolean {
    return !!this.lengthValidator.isLessThan(
      NameContact.MAX_LENGTH,
      `The Name Field on Contact Entity must be greather than ${NameContact.MIN_LENGTH} characters`,
    );
  }
  private isNameLengthGreatherThanMax(): boolean {
    return !!this.lengthValidator.isGreatherThan(
      NameContact.MIN_LENGTH,
      `The Name Field on Contact Entity must be less than ${NameContact.MIN_LENGTH} characters`,
    );
  }

  get value(): string {
    return this._name;
  }
}
