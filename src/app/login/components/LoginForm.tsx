import React, { Component } from 'react';
import BaseForm from '../../shared/components/BaseForm';

import {
  Form, Icon, Input, Card
} from 'antd';

import FormSetup from '../interfaces/form-setup.interface';
import { required } from '../../shared/config/rules.form';
import { CardTitle } from '../../shared/components/CardTitle';

class LoginForm extends Component<any> {
  render() {
    const { getFieldDecorator } = this.props.form;

    const baseForm: FormSetup = { 
      form: this.props.form,
      btnName: 'INGRESAR'
    };

    return (
      <Card 
        title={ <CardTitle>Inicio de sesión</CardTitle> }
        className="card-border"
      >
        <BaseForm baseForm={ baseForm }>

          { /* docNum */ }
          <Form.Item>
            { getFieldDecorator('docNum', { 
              rules: [
                required('El usuario')
              ] 
            })
            (
              <Input
                prefix={ <Icon type="user" /> } 
                placeholder="usuario" 
              />
            ) 
            }
          </Form.Item>

          { /* password */ }
          <Form.Item>
            { getFieldDecorator('password', { 
              rules: [
                required('La contraseña')
              ]
              })
              (
                <Input 
                  prefix={ <Icon type="lock" /> } 
                  type="password" 
                  placeholder="contraseña" 
                />
              ) 
            }
          </Form.Item>
        </BaseForm>
      </Card>
    );
  }
}

const WrappedBaseForm = Form.create({ name: 'loginForm' })(LoginForm);

export default WrappedBaseForm;
