import { types as actionTypes } from './actions';
import Payload from '../../../login/interfaces/payload.interface';

export enum spinnerType {
  processingForm = 'processingForm'
}

export interface Spinner {
  processingForm: boolean;
};

const initialState: Spinner = {
  processingForm: false
};

export default function reducer(
  state: Spinner = initialState, { type, payload }: Payload
  ) {
  switch (type) {
    case actionTypes.ENABLE_SPINNER:
      return {
        ...state,
        [payload]: true
      };

    case actionTypes.DISABLE_SPINNER:
      return {
        ...state,
        [payload]: false
      };

    default:
      return state;
  }
};
