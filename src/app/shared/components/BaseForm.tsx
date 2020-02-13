import React, { Component } from 'react';
import {
 Form, 
 Button
} from 'antd';

import Credentials from '../../login/interfaces/credentials.interface';
import IBaseForm from '../../login/interfaces/form-setup.interface';

import { connect } from 'react-redux';
import { 
  ENABLE_SPINNER,
  DISABLE_SPINNER 
} from '../store/spinners/actions';
import { spinnerType } from '../store/spinners';

class BaseForm extends Component<IBaseForm & any> {
  
  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    this.props.baseForm.form.validateFields(async (errors: Credentials, values: Credentials) => {

      if (!errors) {
        try {
          this.props.ENABLE_SPINNER(spinnerType.processingForm);

          await new Promise(res => setTimeout(() => {
            console.warn(values);
            res();
          }, 2000));
        } catch {

        } finally {
          this.props.DISABLE_SPINNER(spinnerType.processingForm);
        }
      }

    });
  };

  render() {
    return (
      <Form onSubmit={ this.handleSubmit } >

        { this.props.children }

        <Form.Item>
          <Button
            loading={ this.props.processingForm }
            block
            type="primary" 
            htmlType="submit"
          >
            { this.props.baseForm.btnName }
          </Button>
        </Form.Item>
        
      </Form>
    );
  }
}

const mapStateToProps = (state: any) => ({
  processingForm: state.spinners.processingForm
});

const mapDispatchToProps = {
  ENABLE_SPINNER,
  DISABLE_SPINNER
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseForm);
