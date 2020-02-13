import React from 'react';
import { Row, Col } from 'antd';

export const LoginLayout = ({ children }: React.PropsWithChildren<{}>) => (
  <main className="login-layout">
    <Row 
      type="flex" 
      justify="center" 
      style={ { margin: 'auto 0' } }
    >
      <Col xs={ 23 } sm={ 17 } md={ 7 }>
        
        { children }
      
      </Col>
    </Row>
  </main>
);
