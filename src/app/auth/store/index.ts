import Payload from '../interfaces/payload';
import { types } from './actions';

import jwtService from '../services/jwt';
import User from '../interfaces/user';

export interface Auth {
  user: User | null;
  token?: string | null;
};

const initialState: Auth = {
  user: null,
  token: jwtService.getToken() || null
};

export default function reducer(
  state: Auth = initialState,
  { type, payload }: Payload<Auth>
) {

  switch (type) {
    case types.SIGN_IN:
      if (payload.token) jwtService.setToken(payload.token);
      return {
        ...state,
        user: payload.user,
        token: payload.token
      };

    case types.GET_USER:
      return {
        ...state,
        user: payload.user
      };

    case types.PURGE_USER:
      jwtService.purgeToken();
      return state;

    default:
      return state;
  }
}
