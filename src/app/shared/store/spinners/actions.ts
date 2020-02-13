export const types = {
  ENABLE_SPINNER: 'ENABLE_SPINNER',
  DISABLE_SPINNER: 'DISABLE_SPINNER'
};

export const ENABLE_SPINNER = (payload: string) => ({
  type: types.ENABLE_SPINNER,
  payload
});

export const DISABLE_SPINNER = (payload: string) => ({
  type: types.DISABLE_SPINNER,
  payload
});
