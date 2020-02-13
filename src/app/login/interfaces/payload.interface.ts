import { Action } from 'redux';

interface Payload extends Action {
  type: string;
  payload: string;
}

export default Payload;
