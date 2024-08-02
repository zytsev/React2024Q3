'use client';

import { createContext, useState, ReactNode } from 'react';
import getApi from '../../services/getApi/getApi';
import { card } from '../../assets/types/types';

interface context {
  checkedProduct: card | null;
  getProd: (id: number) => void;
  activePagina: number;
  setActivePagina: (pagina: number) => void;
  isDark: boolean;
  togleTheme: () => void;
  cardsOnPagina: number | null;
  setCardsOnPagina: (value: number) => void;
}
type Props = { children: ReactNode };
export const Context = createContext<context | null>(null);

export const ContextProvider = ({ children }: Props) => {
  const [checkedProduct, setCeckedProduct] = useState<card | null>(null);
  const [activePagina, setActivePagina] = useState(1);
  const [isDark, setDark] = useState(false);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);

  const getProd = async (id: number) => {
    const arr: card[] | null = await getApi(null);
    arr?.forEach((element) => {
      if (element.id === id) setCeckedProduct(element);
    });
  };
  const togleTheme = () => {
    setDark(!isDark);
  };

  const value = {
    checkedProduct,
    getProd,
    activePagina,
    setActivePagina,
    isDark,
    togleTheme,
    cardsOnPagina,
    setCardsOnPagina,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
