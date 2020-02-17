import React from 'react';

import { LoginLayout } from '../layouts/LoginLayout';

import LoginForm from './components/LoginForm';

const LoginPage: React.FC<{}> = () => (

  <LoginLayout>

    <LoginForm />

  </LoginLayout>

);

export default LoginPage;
