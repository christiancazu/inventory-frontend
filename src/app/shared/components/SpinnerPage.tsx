import React from 'react';

import { SpinnerPage as Spinner } from '../../../assets/styled/index';
import { LoginLayout } from '../../layouts/LoginLayout';

export default function SpinnerPage() {
  return (
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
}
