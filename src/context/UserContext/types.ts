import type { ReactNode } from 'react';

export interface UserContextInterface {
  user: DefaultUserVal;
  handleUserLogin: (val: DefaultUserVal) => void;
}

export interface DefaultUserVal {
  $id: string;
  Id: string;
  Name: string;
  Email: string;
  Token: string;
}

export interface UserProvider {
  children: ReactNode;
}
