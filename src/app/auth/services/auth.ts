import axiosInstance from '../../../boot/axios';
import Credentials from '../interfaces/credentials';

export default {
  signIn: (data: Credentials) => axiosInstance.post('auth/signIn', data),

  getUser: () => axiosInstance.get('auth/user')
};
