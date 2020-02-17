import axios from 'axios';

import {
  USE_NOTIFY,
  notifyType
} from '../app/shared/use/notification';
import messages from '../app/config/messages';
import jwtService from '../app/login/services/jwt.service';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

// request interceptor
axiosInstance.interceptors.request.use(config => {
  // send token in header request
  const token = jwtService.getToken();

  token && (config.headers.common['Authorization'] = `Bearer ${token}`);

  return config;
});

// response interceptor
axiosInstance.interceptors.response.use(
  // handle response success
  response => response,
  // handle response error
  error => {
    const { status } = error.response;

    let message = error.response.data.message || messages.errors.ERROR;

    switch (status) {

      case 500:
        break;

        // case 401:
        // case 404:
        //   message = error.response.data.message || message;
        //   break;

      case 422:
        message = messages.errors.INVALID_DATA;
        break;

      case 429:
        // too many request
        break;

      default:
        //
    }

    USE_NOTIFY({
      type: notifyType.error,
      message
    });

    return Promise.reject(error);
  }
);

export default axiosInstance;
