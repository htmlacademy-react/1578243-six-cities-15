import { mockData } from './mockData/mockData';
import { MainPage } from './pages/MainPage';

export function App(): JSX.Element {
  return (
    <MainPage countOffers={mockData.length}/>
  );
}

export default App;
