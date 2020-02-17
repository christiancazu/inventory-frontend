import { spinnerType } from '.';

export const types = {
  ENABLE_SPINNER: 'ENABLE_SPINNER',
  DISABLE_SPINNER: 'DISABLE_SPINNER',
};

export const ENABLE_SPINNER = (payload: spinnerType) => ({
  type: types.ENABLE_SPINNER,
  payload
});

export const DISABLE_SPINNER = (payload: spinnerType) => ({
  type: types.DISABLE_SPINNER,
  payload
});
