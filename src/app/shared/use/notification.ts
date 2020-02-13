import { notification } from 'antd';

export enum notifyType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}

interface Notification {
  type: keyof typeof notifyType;
  description: string;
}

export const USE_NOTIFICATION = ({ type, description }: Notification) => {

  notification[type]({
    message: 'Correcto',
    description
  });
  
};
