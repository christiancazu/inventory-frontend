import { Action } from 'redux';

interface Payload<T> extends Action {
  payload: T;
}

export default Payload;
