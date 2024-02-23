import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';

export const NotFoundPage = (): JSX.Element => (
  <div className="page" style={{height:'100vh'}}>
    <Header/>
    <main className="page__main page__main--favorites">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flexDirection: 'column', height: '50vh'}}>
        <h1 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>404 Not Found</h1>
        <Link to={'/'}>Вернуться на главную страницу</Link>
      </div>
    </main>
  </div>
);
