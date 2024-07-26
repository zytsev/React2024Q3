import style from './header.module.css';
import Search from '../../components/search/search';
import Btn from '../../components/Btn/Btn';
import { Context } from '../../components/Context/Context';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { themeIkons } from '../../assets/theme/themeIkons';

const Header = () => {
  const context = useContext(Context);
  return (
    <>
      <div
        className={`${style.header_wrapper} ${context?.isDark && 'backgr-dark'}`}
      >
        <Search />
        <Link to={'*'}>
          <Btn text="Error" />
        </Link>
        <img
          className={style.header_togleTheme}
          src={context?.isDark ? themeIkons.light : themeIkons.dark}
          alt="theme"
          onClick={context?.togleTheme}
        />
      </div>

      <Outlet />
    </>
  );
};

export default Header;
