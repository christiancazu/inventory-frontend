import {
  useEffect, useState
} from 'react';

import store from '../store';
import {
  SET_USER, PURGE_USER
} from '../app/auth/store/actions';

import authService from '../app/auth/services/auth';
import { Auth } from '../app/auth/store';
import User from '../app/auth/interfaces/user';
import { AxiosResponse } from 'axios';

/**
 * hook middleware
 * fetch user from api to check authentication
 */
export const useCheckAuth = () => {
  const { user }: Auth = store.getState().auth;

  const [auth, setAuth] = useState<any>(user);

  useEffect(() => {

    const checkAuth = async () => {
      try {
        const { data }: AxiosResponse<User> = await authService.getUser();

        store.dispatch(SET_USER(data));

        setAuth(true);
      } catch {
        store.dispatch(PURGE_USER());
        setAuth(false);
      }
    };

    (!user) && checkAuth();
  // eslint-disable-next-line
  }, []);

  return auth;
};
