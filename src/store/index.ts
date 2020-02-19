import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import thunk from 'redux-thunk';

import auth from '../app/auth/store';
import spinners from '../app/shared/store/spinners';

const reducer = combineReducers({
  auth,
  spinners
});

export default createStore(reducer, applyMiddleware(thunk));

export type AppState = ReturnType<typeof reducer>
