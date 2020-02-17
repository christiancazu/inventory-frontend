import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  RouteProps
} from 'react-router-dom';

// import { routes } from './routes';
import { useCheckAuth } from './middleware.hook';

import SpinnerPage from '../app/shared/components/SpinnerPage';

interface PrivateRouteProps extends RouteProps {
  middleware?: () => void,
  redirectTo?: string;
  component: React.ComponentType<RouteProps>
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {

  const isValid = rest.middleware;

  return (
    <Route
      { ...rest}
      render={
        props =>
          isValid === null
            ? <SpinnerPage />
            : isValid
              ? <Component { ...props }/>
              : <Redirect to={ { pathname: rest.redirectTo, state: { from: props.location } } } />
      }
    />
  );
};

export const AppRouter: React.FC<{}> = () => {
  // const routesMap = routes.map((route, i) => <Route key={ i } { ...route } />);

  return (
    <React.Suspense fallback={ null }>
      <BrowserRouter>
        <Switch>
          <PrivateRoute
            path='/'
            component={ React.lazy(() => import('../app/dashboard')) }
            middleware={ useCheckAuth() }
            redirectTo='login'
            exact
          />
          <Route
            path='/login'
            component={ React.lazy(() => import('../app/login')) }
            exact
          />
        </Switch>
      </BrowserRouter>
    </React.Suspense>
  );
};
