export default {
  getToken: () => localStorage.getItem('token'),

  setToken: (payload: string) => localStorage.setItem('token', payload)
};
