import {
  useEffect, useState
} from 'react';

import store from '../store';
import { GET_USER } from '../app/login/store/actions';
import authService from '../app/login/services/auth.service';
import { AxiosResponse } from 'axios';
import { Auth } from '../app/login/store';

export const useCheckAuth = () => {
  const { user }: Auth = store.getState().auth;

  const [auth, setAuth] = useState<any>(user);

  useEffect(() => {

    const checkAuth = async () => {
      try {
        const { data }: AxiosResponse = await authService.getUser();

        store.dispatch(GET_USER(data));

        setAuth(true);
      } catch {
        setAuth(false);
      }
    };

    (!user) && checkAuth();
  // eslint-disable-next-line
  }, []);

  return auth;
};
