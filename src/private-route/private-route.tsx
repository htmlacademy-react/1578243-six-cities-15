import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../types/types';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateRouteProps): JSX.Element => {
  const {authorizationStatus, children} = props;

  return (
    authorizationStatus === 'AUTH'
      ? children
      : <Navigate to={AppRoute.LOGIN} />
  );
};
