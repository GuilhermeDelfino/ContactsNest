import { LengthValidator } from '../../../helpers/validations/LengthValidator';
import { regexEmail } from '../../../helpers/regex';
export class Email {
  static MIN_LENGTH = 10;
  static MAX_LENGTH = 150;
  private lengthValidator: LengthValidator;
  constructor(private email: string) {
    this.lengthValidator = new LengthValidator(email);
    this.isEmailValid();
  }

  private isEmailValid(): boolean {
    return this.isEmailLengthValid() && this.isEmailRegexValid();
  }

  private isEmailRegexValid(): boolean {
    if (regexEmail.test(this.email)) {
      return true;
    }
    throw new Error('Email is not valid');
  }
  private isEmailLengthValid(): boolean {
    return !!this.lengthValidator.isValid(Email.MIN_LENGTH, Email.MAX_LENGTH);
  }

  get value(): string {
    return this.email;
  }
}
