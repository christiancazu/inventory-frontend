import React from 'react';

import { 
  BrowserRouter, 
  Route, 
  Switch 
} from 'react-router-dom';

import { routes } from './routes';

export const AppRouter: React.FC<{}> = () => {
  const routesMap = routes.map((route, i) => <Route key={ i } { ...route } />);
  
  return (
    <BrowserRouter>
      <Switch>
        { routesMap }
      </Switch>
    </BrowserRouter>
  );
};
