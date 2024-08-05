import React from 'react';
import { useCoffee } from '../../../src/components/Context/useCoffee';
import Header from '../header/header';
import { Outlet } from '@remix-run/react';

const Home = () => {
  const coffeeContext = useCoffee();
  return (
    <main
      className={`'main-container' ${coffeeContext.isDark && 'backgr-dark'}`}
    >
      <Header />
      <Outlet />
    </main>
  );
};

export default Home;
