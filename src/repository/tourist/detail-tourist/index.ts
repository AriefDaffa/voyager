export const detailTourist = (id: string, token: string) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/Tourist/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${token}`,
    },
  });
};
