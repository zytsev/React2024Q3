import style from './header.module.css';
import Search from '../../components/search/search';
import Btn from '../../components/Btn/Btn';
//import { HeaderProps } from '../../assets/types/types';
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <div className={style.header_wrapper}>
        <Search />
        <Link to={'*'}>
          <Btn text="Error" />
        </Link>
      </div>

      <Outlet />
    </>
  );
};

export default Header;
