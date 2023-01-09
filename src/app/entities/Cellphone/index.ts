import { regexToFormatCellphoneMask } from '../../../helpers/regex';
import { Ddd } from '../DddNumber';

export type PropsCellphone = {
  ddd: Ddd;
  cellphone: string;
};

export class Cellphone {
  //00000000000
  private cellphoneNumberFormated: string;
  private cellphoneFormated: string;
  constructor(cellphone: string) {
    const formated = this.formatCellphoneToJustNumbers(cellphone);
    const cellphoneNumber = formated.substring(2, formated.length);
    this.validateCellphoneNumber(cellphoneNumber);
    this.formatProps({
      ddd: new Ddd(formated.substring(0, 2)),
      cellphone: cellphoneNumber,
    });
  }

  private validateCellphoneNumber(
    cellphoneNumber: string,
    messageError = 'Cellphone number invalid',
  ) {
    const formatedCellphoneNumber =
      this.formatCellphoneToJustNumbers(cellphoneNumber);
    if (formatedCellphoneNumber.length != 9) {
      throw new Error(messageError);
    }
    this.cellphoneNumberFormated = formatedCellphoneNumber;
    return true;
  }
  get mask(): string {
    const regexArray = this.cellphoneFormated.match(regexToFormatCellphoneMask);
    return `(${regexArray[1]}) ${regexArray[2]}-${regexArray[3]}`;
  }

  get value(): string {
    return this.cellphoneFormated;
  }

  private formatProps(props: PropsCellphone) {
    const isValid = this.validateCellphoneNumber(props.cellphone);
    if (isValid) {
      this.cellphoneFormated = props.ddd.value.concat(
        this.cellphoneNumberFormated,
      );
    }
  }

  private formatCellphoneToJustNumbers(cellphoneNumber: string) {
    return cellphoneNumber.match(/(\d)/g).join('');
  }
}
