import { Link } from 'react-router-dom';
import { Header } from '../../components/header/header';

export const NotFoundPage = (): JSX.Element => (
  <div className="page">
    <Header/>
    <main className="page__main page__main--favorites">
      <div>
        <span style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>404 Not Found</span>
        <Link style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} to={'/'}>Вернуться на главную страницу</Link>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  </div>
);
