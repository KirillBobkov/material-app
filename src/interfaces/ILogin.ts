import { IRegistration } from './IRegistration';

export interface ILogin extends Omit<IRegistration, 'firstName' | 'lastName'> {
  email: string;
  password:  string;
}