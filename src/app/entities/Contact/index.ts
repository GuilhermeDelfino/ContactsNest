import { randomUUID } from 'crypto';
import { Cellphone } from '../Cellphone';
import { Email } from '../Email';
import { NameContact } from './name.entity';

export type PropsContact = {
  name: NameContact;
  cellphone: Cellphone;
  email: Email;
  createdAt?: Date;
  _id?: string;
};
export class Contact {
  private props: Required<PropsContact>;
  constructor(props: PropsContact) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
      _id: props._id ?? randomUUID(),
    };
  }
  public get name(): string {
    return this.props.name.value;
  }
  public get cellphone(): Cellphone {
    return this.props.cellphone;
  }
  public get email(): string {
    return this.props.email.value;
  }
  public get id(): string {
    return this.props._id;
  }
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
