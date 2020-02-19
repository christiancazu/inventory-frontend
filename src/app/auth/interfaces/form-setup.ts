import { WrappedFormUtils } from 'antd/lib/form/Form';

interface FormSetup<T> {
  form: WrappedFormUtils;
  btnName?: string;
  dispatch: T;
  beforeSubmit: (...args: any[]) => void;
  successSubmit: (...args: any[]) => void;
  errorSubmit: (...args: any[]) => void;
}

export default FormSetup;
