import { CreateTouristPayload } from './types';

export const createTourist = (body: CreateTouristPayload, token: string) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/Tourist`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    body: new URLSearchParams({ ...body }),
  });
};
