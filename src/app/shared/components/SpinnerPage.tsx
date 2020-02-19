import React from 'react';

import { SpinnerPage as Spinner } from '../../../assets/styled/index';
import { LoginLayout } from '../../../layouts/LoginLayout';

const SpinnerPage: React.FC<{}> = () => (
  <LoginLayout>
    <Spinner>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Spinner>
  </LoginLayout>
);

export default SpinnerPage;
