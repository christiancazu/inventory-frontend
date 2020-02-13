import {
 createStore, 
 combineReducers 
} from 'redux';

import auth from '../app/login/store';
import spinners from '../app/shared/store/spinners';

const reducer = combineReducers({
  auth,
  spinners
});

export default createStore(reducer);
