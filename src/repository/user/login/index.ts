import type { LoginPayload } from './types';

export const login = (body: LoginPayload) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/authaccount/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ ...body }),
  });
};
