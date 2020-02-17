import Credentials from '../interfaces/credentials.interface';
import authService from '../services/auth.service';
import { Dispatch } from 'react';
import { Auth } from './index';
import { AxiosResponse } from 'axios';

export const types = {
  SIGN_IN: 'SIGN_IN',
  GET_USER: 'GET_USER',
};

export const SIGN_IN = (payload: Credentials) => async (dispatch: Dispatch<{}>) => {
  const { data }: AxiosResponse<Auth> = await authService.signIn(payload);

  dispatch({
    type: types.SIGN_IN,
    payload: data,
  });

};

export const GET_USER = (payload: Auth) => ({
  type: types.GET_USER,
  payload,
});
