import React from 'react';
import { Button } from 'antd';

import {
 USE_NOTIFICATION, notifyType 
} from '../shared/use/notification';

export const LoginPage: React.FC<{}> = () => {

  return (
    <Button 
      type="ghost" 
      onClick={
        () => USE_NOTIFICATION({
          type: notifyType.success, 
          description: 'gaaaa'
        })
      }
    >
      gaaaaa
    </Button>
  );
};
