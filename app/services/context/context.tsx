import { createContext, useState, ReactNode } from 'react';
import { card, contextType } from '../../assets/types/types';

type Props = { children: ReactNode };
export const Context = createContext<contextType | null>(null);

export const ContextProvider = ({ children }: Props) => {
  const [activePagina, setActivePagina] = useState(1);
  const [isDark, setDark] = useState(false);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);
  const [searchParam, setSearchParam] = useState('');
  const [basket, setBasket] = useState<card[]>([]);

  const togleTheme = () => {
    setDark(!isDark);
  };

  const value = {
    activePagina,
    setActivePagina,
    isDark,
    togleTheme,
    cardsOnPagina,
    setCardsOnPagina,
    searchParam,
    setSearchParam,
    basket,
    setBasket,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
