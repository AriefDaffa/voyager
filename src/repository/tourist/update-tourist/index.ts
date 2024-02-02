import { UpdateTouristPayload } from './types';

export const updateTourist = (
  body: UpdateTouristPayload,
  id: string,
  token: string
) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/Tourist/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    body: new URLSearchParams({ ...body }),
  });
};
