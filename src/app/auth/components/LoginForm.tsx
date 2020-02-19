import React, { useState } from 'react';
import  { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { SIGN_IN } from '../store/actions';

import {
  Form, Icon, Input, Card
} from 'antd';
import {
  FormComponentProps, WrappedFormInternalProps
} from 'antd/lib/form/Form';

import FormSetup from '../interfaces/form-setup';
import BaseForm from '../../shared/components/BaseForm';

import { required } from '../../../config/rules.form';
import { StyledCardTitle } from '../../../assets/styled/index';

import {
  USE_NOTIFY, notifyType
} from '../../shared/use/notification';
import messages from '../../../config/messages';

// redux dispatch
const mapDispatchToProps = {
  SIGN_IN
};

interface LoginProps extends FormComponentProps {
  SIGN_IN: typeof mapDispatchToProps;
}

const LoginForm = ({ form, SIGN_IN }: LoginProps) => {

  const { getFieldDecorator } = form;

  const [isLogged, setIsLogged] = useState<boolean>(false);

  const handleSuccessSubmit = () => {
    setIsLogged(true);
    USE_NOTIFY({
      type: notifyType.success,
      message: messages.success.AUTH
    });
  };

  const formSetup: FormSetup<typeof mapDispatchToProps> = {
    form,
    btnName: 'INGRESAR',
    dispatch: SIGN_IN,
    errorSubmit: () => {},
    beforeSubmit: () => {},
    successSubmit: handleSuccessSubmit
  };

  return (
    isLogged
      ? <Redirect to="/" />
      :
      <Card
        title={ <StyledCardTitle>Inicio de sesión</StyledCardTitle> }
        className="card-login"
      >
        <BaseForm formSetup={ formSetup }>
          {/* docNum */}
          <Form.Item>
            {
              getFieldDecorator('docNum', {
                rules: [required('El usuario')],
              })
              (
                <Input
                  prefix={ <Icon type="user" /> }
                  placeholder="usuario"
                />
              )
            }
          </Form.Item>

          {/* password */}
          <Form.Item>
            {
              getFieldDecorator('password', {
                rules: [required('La contraseña')],
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
};

const WrappedLoginForm = Form.create<WrappedFormInternalProps>()(LoginForm);

export default connect(null, mapDispatchToProps)(WrappedLoginForm);
