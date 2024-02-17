import { mockData } from './mock-data/mock-data';
import { MainPage } from './pages/main-page';

export const App = (): JSX.Element => (
  <MainPage countOffers={mockData.length}/>
);
