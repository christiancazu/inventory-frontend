import Credentials from '../interfaces/credentials';
import authService from '../services/auth';
import { Dispatch } from 'react';
import { Auth } from './index';
import { AxiosResponse } from 'axios';
import User from '../interfaces/user';

export const types = {
  SIGN_IN: 'SIGN_IN',
  GET_USER: 'GET_USER',
  PURGE_USER: 'PURGE_USER',
};

export const SIGN_IN = (credentials: Credentials) => async (dispatch: Dispatch<{}>) => {
  const { data }: AxiosResponse<Auth> = await authService.signIn(credentials);

  dispatch({
    type: types.SIGN_IN,
    payload: data
  });

};

export const SET_USER = (user: User) => {

  const payload: Auth = {
    user
  };
  return {
    type: types.GET_USER,
    payload
  };
};

export const PURGE_USER = () => ({
  type: types.PURGE_USER,
  payload: {
    user : null
  }
});
