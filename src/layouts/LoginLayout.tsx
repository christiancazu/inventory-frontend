import React from 'react';

import {
  Row, Col
} from 'antd';

import { StyledCenterLayout } from '../assets/styled/index';

export const LoginLayout = ({ children }: React.PropsWithChildren<{}>) => (
  <StyledCenterLayout>
    <Row
      type="flex"
      justify="center"
    >
      <Col xs={ 23 } sm={ 17 } md={ 7 }>

        { children }

      </Col>
    </Row>
  </StyledCenterLayout>
);
