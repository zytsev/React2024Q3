'use client';
import Image from 'next/image';
import style from './header.module.css';
import Search from '../../components/search/search';
import Btn from '../../components/Btn/Btn';
import { Context } from '../../components/Context/Context';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
//import { themeIkons } from '../../assets/theme/themeIkons';
import Link from 'next/link';

const Header = () => {
  const context = useContext(Context);
  return (
    <>
      <div
        className={`${style.header_wrapper} ${context?.isDark && 'backgr-dark'}`}
      >
        <Search />
        <Link href="/notfound">
          <Btn text="Error" />
        </Link>
        <Image
          src={context?.isDark ? '/light.png' : '/dark.png'}
          width={30}
          height={30}
          alt="Theme"
          onClick={context?.togleTheme}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <Outlet />
    </>
  );
};

export default Header;
