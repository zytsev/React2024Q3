'use client';
import { useContext } from 'react';
import { Context } from '../../components/Context/Context';

const Container = ({ children }: { children: React.ReactNode }) => {
  const context = useContext(Context);
  return (
    <main className={`${context?.isDark && 'backgr-dark'}`}>{children}</main>
  );
};

export default Container;
