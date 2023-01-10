import { randomUUID } from 'crypto';
import { Cellphone } from '../Cellphone';
import { Email } from '../Email';
import { NameContact } from './Name.entity';

export type PropsContact = {
  name: NameContact;
  cellphone: Cellphone;
  email: Email;
  createdAt: Date;
  id: string;
};
export type ContactAttributes = {
  name: string;
  cellphone: string;
  email: string;
  id?: string;
  createdAt?: Date;
};
export class Contact {
  private props: Required<PropsContact>;
  constructor(props: ContactAttributes) {
    this.props = {
      cellphone: new Cellphone(props.cellphone),
      email: new Email(props.email),
      name: new NameContact(props.name),
      createdAt: props.createdAt ?? new Date(),
      id: props.id ?? randomUUID(),
    };
  }
  public get name(): string {
    return this.props.name.value;
  }
  public get cellphone(): string {
    return this.props.cellphone.value;
  }
  public getCellphoneMask(): string {
    return this.props.cellphone.mask;
  }
  public get email(): string {
    return this.props.email.value;
  }
  public get id(): string {
    return this.props.id;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
