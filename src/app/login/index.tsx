import React from 'react';

import { LoginLayout } from '../shared/layouts/LoginLayout';

import LoginForm from './components/LoginForm';

export const LoginPage: React.FC<{}> = () => (

  <LoginLayout>

    <LoginForm />

  </LoginLayout>
  
);
