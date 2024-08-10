import style from './header.module.css';
import Search from '../search/search';
import useCoffee from '../../services/context/useCoffee';
import { Link } from '@remix-run/react';

const Header = () => {
  const { isDark, togleTheme } = useCoffee();

  return (
    <header className={`${isDark && 'backgr-dark'} ${style.header_wrapper} `}>
      <Search />
      <Link to="/notfoun">
        <button type="button">Error</button>
      </Link>
      <img
        className={style.header_togleTheme}
        src={isDark ? '/light.png' : '/dark.png'}
        width={30}
        height={30}
        alt="Theme"
        onClick={togleTheme}
      />
    </header>
  );
};

export default Header;
