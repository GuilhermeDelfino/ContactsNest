export class LengthValidator {
  private defaultMessageError = 'Length Error';
  constructor(private content: string) {}

  isValid(min: number, max: number): boolean {
    return !!this.isGreatherThan(min).isLessThan(max);
  }

  isGreatherThan(
    min: number,
    messageError = this.defaultMessageError,
  ): LengthValidator {
    if (this.content.trim().length >= min) {
      return new LengthValidator(this.content);
    }
    throw new Error(messageError);
  }

  isLessThan(
    max: number,
    messageError = this.defaultMessageError,
  ): LengthValidator {
    if (this.content.trim().length <= max) {
      return new LengthValidator(this.content);
    }
    throw new Error(messageError);
  }
}
