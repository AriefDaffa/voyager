import type { SyntheticEvent } from 'react';

interface Msg {
  type: string;
  msg: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UseLoginResponse {
  msg: Msg;
  isLoading: boolean;
  handleLogin: (e: SyntheticEvent) => void;
}
