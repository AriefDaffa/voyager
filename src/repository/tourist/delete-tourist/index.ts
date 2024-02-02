import { DeleteTouristPayload } from './types';

export const deleteTourist = (
  body: DeleteTouristPayload,
  id: string,
  token: string
) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/Tourist/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
    body: new URLSearchParams({ ...body }),
  });
};
