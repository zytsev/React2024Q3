import style from './header.module.css';
//import Search from '../search/search';
import Btn from '../btn/btn';
import { useCoffee } from '../../../src/components/Context/useCoffee';
import { Link } from '@remix-run/react';
//import { themeIkons } from '../../assets/theme/themeIkons';

const Header = () => {
  const coffeeContext = useCoffee();
  return (
    <>
      <div className={style.header_wrapper}>
        {/* <Search /> */}
        <Link to="/notfound">
          <Btn text="Error" />
        </Link>
        <img
          className={style.header_togleTheme}
          src={coffeeContext.isDark ? '/light.png' : '/dark.png'}
          width={30}
          height={30}
          alt="Theme"
          onClick={coffeeContext.togleTheme}
        />
      </div>
    </>
  );
};

export default Header;
