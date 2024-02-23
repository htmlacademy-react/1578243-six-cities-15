import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mockData } from '../mock-data/mock-data';
import { FavoritesPage } from '../pages/favorites-page/favorites-page';
import { LoginPage } from '../pages/login-page/login-page';
import { MainPage } from '../pages/main-page/main-page';
import { NotFoundPage } from '../pages/not-found-page.tsx/not-found-page';
import { OfferPage } from '../pages/offer-page/offer-page';
import { PrivateRoute, PublicRoute } from '../private-route/private-route';
import { AppRoute } from '../types/types';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path={AppRoute.MAIN}
        element={<MainPage countOffers={mockData.length}/>}
      />
      <Route
        path={AppRoute.FAVORITES}
        element={
          <PrivateRoute
            authorizationStatus='NO_AUTH'
          >
            <FavoritesPage />
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.LOGIN}
        element={<PublicRoute authorizationStatus='NO_AUTH'><LoginPage/></PublicRoute>}
      />
      <Route
        path={AppRoute.OFFER}
        element={<OfferPage/>}
      />
      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  </BrowserRouter>
);
