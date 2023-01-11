import { randomUUID } from 'crypto';
import { Cellphone } from '../Cellphone';
import { Email } from '../Email';
import { NameContact } from './Name.entity';

export type ContactAttributes = {
  name: string;
  cellphone: string;
  email: string;
  id?: string;
  createdAt?: Date;
  maskCellphone?: string;
};

export class Contact {
  private data: ContactAttributes;
  constructor(props: Omit<ContactAttributes, 'maskCellphone'>) {
    const cellphone = new Cellphone(props.cellphone);
    this.data = {
      cellphone: cellphone.value,
      email: new Email(props.email).value,
      name: new NameContact(props.name).value,
      createdAt: props.createdAt ?? new Date(),
      id: props.id ?? randomUUID(),
      maskCellphone: cellphone.mask,
    };
  }

  public get name(): string {
    return this.data.name;
  }
  public get cellphone(): string {
    return this.data.cellphone;
  }
  public getCellphoneMask(): string {
    return this.data.maskCellphone;
  }
  public get email(): string {
    return this.data.email;
  }
  public get id(): string {
    return this.data.id;
  }
  public get createdAt(): Date {
    return this.data.createdAt;
  }
}
