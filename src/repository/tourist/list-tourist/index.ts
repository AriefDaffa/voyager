export const listTourist = (token: string, page: number) => {
  return fetch(`${import.meta.env.VITE_BASE_API}/api/Tourist?page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
