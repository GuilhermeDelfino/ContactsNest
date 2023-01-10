import { Cellphone } from '../entities/Cellphone';
import { IRepositoryContact } from '../repositories/contact.repository';

export class VerifyCellphoneHasAlreadyBeenInserted {
  constructor(private readonly repository: IRepositoryContact) {}

  async execute(cellphone: Cellphone): Promise<boolean> {
    return await !!this.repository.verifyCellphoneHasAlreadyBeenInserted(
      cellphone,
    );
  }
}
