import Credentials from '../interfaces/credentials.interface';

export const type = 'SIGN_IN';

export const SIGN_IN = (payload: Credentials) => ({
  type,
  payload
});
