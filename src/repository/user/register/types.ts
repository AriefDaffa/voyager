import type { SyntheticEvent } from 'react';

interface Msg {
  type: string;
  msg: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  name: string;
}

export interface UseRegisterResponse {
  msg: Msg;
  isLoading: boolean;
  handleRegister: (e: SyntheticEvent) => void;
}
