import { types } from './actions';

import Payload from '../../../auth/interfaces/payload';

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
  state: Spinner = initialState,
  { type, payload }: Payload<spinnerType>
) {
  switch (type) {
    case types.ENABLE_SPINNER:
      return {
        ...state,
        [payload]: true
      };

    case types.DISABLE_SPINNER:
      return {
        ...state,
        [payload]: false
      };

    default:
      return state;
  }
};
