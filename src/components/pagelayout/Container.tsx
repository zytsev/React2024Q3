'use client';
import { useContext } from 'react';
import { Context } from '../../../app/components/Context/Context';

const Container = () => {
  const context = useContext(Context);
  return (
    <main className={`${context?.isDark && 'backgr-dark'}`}>
      {/* <Outlet /> */}
    </main>
  );
};

export default Container;
