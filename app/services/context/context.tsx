import { createContext, useState, ReactNode } from 'react';
import { card } from '../../assets/types/types';

export interface contextType {
  searchParam: string;
  activePagina: number;
  isDark: boolean;
  cardsOnPagina: number;
  basket: card[];

  setActivePagina: (pagina: number) => void;
  togleTheme: () => void;
  setCardsOnPagina: (value: number) => void;
  setSearchParam: (value: string) => void;
  setBasket: (cards: card[]) => void;
}
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
