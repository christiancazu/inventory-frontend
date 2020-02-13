import Payload from '../interfaces/payload.interface';

interface Auth {
  user: object | null;
}

const initialState: Auth = {
  user: null
};

export default function reducer(
  state: Auth = initialState, { type, payload }: Payload
  ) {
  switch (type) {
    default:
      return state;
  }
}
