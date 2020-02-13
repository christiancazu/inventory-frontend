export const required = (field: string) => ({
  required: true,
  message: `${field} es requerid${field[1] === 'a' ? 'a' : 'o'}`
});
