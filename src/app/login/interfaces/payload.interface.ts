import { Action } from 'redux';

interface Payload<T> extends Action {
  type: string;
  payload: T;
}

export default Payload;
