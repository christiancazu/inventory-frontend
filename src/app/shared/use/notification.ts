import { notification } from 'antd';

export enum notifyType {
  success = 'success',
  info = 'info',
  warning = 'warning',
  error = 'error'
}

interface Notification {
  type: keyof typeof notifyType;
  message: string;
  description?: string;
}

export const USE_NOTIFY = ({
  type, message, description = ''
}: Notification) => {

  notification[type]({
    message,
    description
  });

};
