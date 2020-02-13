import React from 'react';
import { AppRouter } from './router';

import { Provider } from 'react-redux';
import store from './store';

export const App: React.FC<{}> = () => (
  <Provider store={ store }>
    <AppRouter />
  </Provider>
);
