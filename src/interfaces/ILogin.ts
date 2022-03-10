import { IRegistration } from './IRegistration';

export interface ILogin extends Omit<IRegistration, 'email' | 'password'> {
  firstName: string;
  lastName:  string;
}