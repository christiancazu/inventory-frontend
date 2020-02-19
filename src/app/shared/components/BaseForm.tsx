import React from 'react';
import { connect } from 'react-redux';

import {
  Form, Button
} from 'antd';

import {
  ENABLE_SPINNER, DISABLE_SPINNER
} from '../store/spinners/actions';

import { spinnerType } from '../store/spinners';
import {
  USE_NOTIFY, notifyType
} from '../use/notification';
import messages from '../../../config/messages';

import { AppState } from '../../../store';

import FormSetup from '../../auth/interfaces/form-setup';

// redux state
const mapStateToProps = (state: AppState) => ({
  processingForm: state.spinners.processingForm
});

// redux dispatchs
const mapDispatchToProps = {
  ENABLE_SPINNER,
  DISABLE_SPINNER,
};

interface BaseFormProps {
  formSetup: FormSetup<any>;
  processingForm: boolean;
  ENABLE_SPINNER: Function;
  DISABLE_SPINNER: Function;
  children: React.ReactNode;
}

const BaseForm = ({
  formSetup,
  processingForm,
  ENABLE_SPINNER,
  DISABLE_SPINNER,
  children
}: BaseFormProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    formSetup.form.validateFields(
      async (errors: object, values: object) => {
        if (!errors) {
          try {
            formSetup.beforeSubmit();
            ENABLE_SPINNER(spinnerType.processingForm);

            await formSetup.dispatch(values);

            formSetup.successSubmit();
          } catch (e) {
            formSetup.errorSubmit(e);
          } finally {
            DISABLE_SPINNER(spinnerType.processingForm);
          }
        } else {
          USE_NOTIFY({
            type: notifyType.error,
            message: messages.errors.INVALID_DATA,
          });
        }
      });
  };

  return (
    <Form onSubmit={ handleSubmit }>
      {children}

      <Form.Item>
        <Button loading={ processingForm }
          block
          type="primary"
          htmlType="submit"
        >
          {formSetup.btnName}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseForm);
