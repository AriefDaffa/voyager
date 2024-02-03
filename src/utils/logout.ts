export const logout = () => {
  window.location.replace('/login');
  localStorage.removeItem('voy-user');
};
