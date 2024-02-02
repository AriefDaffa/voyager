import type { RegisterPayload } from './types';

export const register = (body: RegisterPayload) => {
  return fetch(
    `${import.meta.env.VITE_BASE_API}/api/authaccount/registration`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({ ...body }),
    }
  );
};
