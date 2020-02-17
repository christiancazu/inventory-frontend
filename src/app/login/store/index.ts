import Payload from '../interfaces/payload.interface';
import { types } from './actions';

import jwtService from '../services/jwt.service';

export interface Auth {
  user: object | null;
  token: string;
}

const initialState: Auth = {
  user: null,
  token: jwtService.getToken() || '',
};

export default function reducer(
  state: Auth = initialState,
  { type, payload }: Payload<Auth>
) {
  switch (type) {
    case types.SIGN_IN:
      jwtService.setToken(payload.token);
      return {
        ...payload
      };
    case types.GET_USER:
      return {
        user: payload
      };

    default:
      return state;
  }
}
