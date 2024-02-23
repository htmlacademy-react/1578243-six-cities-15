import {Navigate} from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../types/types';

type AccessRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const createAccessRoute = (status: AuthorizationStatus, fallback: AppRoute) =>
  function AccessRoute({authorizationStatus,children}:AccessRouteProps) {
    return authorizationStatus === status ? (
      children)
      : (<Navigate to={fallback} />);
  };

const PrivateRoute = createAccessRoute('AUTH',AppRoute.LOGIN);
const PublicRoute = createAccessRoute('NO_AUTH', AppRoute.MAIN);

export {PrivateRoute, PublicRoute};
