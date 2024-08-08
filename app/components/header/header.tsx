import style from './header.module.css';
import Search from '../search/search';
import Btn from '../btn/btn';
import { useCoffee } from '../Context/useCoffee';
import { Link } from '@remix-run/react';
import { LoaderFunctionArgs, json } from '@remix-run/node';

//import { themeIkons } from '../../assets/theme/themeIkons';

// eslint-disable-next-line react-refresh/only-export-components
export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const search = url.searchParams.get('search');
  const res = await fetch(
    `https://66716cbfe083e62ee43b8e10.mockapi.io/books?search=${search}`
  );

  return json(await res.json());
}

const Header = () => {
  const { isDark, togleTheme } = useCoffee();

  return (
    <header className={`${isDark && 'backgr-dark'} ${style.header_wrapper} `}>
      <Search />
      <Link to="/notfound">
        <Btn text="Error" />
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
