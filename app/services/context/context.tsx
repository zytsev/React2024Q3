import { createContext, useState, ReactNode } from 'react';
import getApi from '../getApi/getApi';
import { card } from '../../assets/types/types';

export interface contextType {
  searchParam: string;
  checkedProduct: card | null;
  activePagina: number;
  isDark: boolean;
  cardsOnPagina: number;
  basket: card[];
  getProd: (id: number) => void;
  setActivePagina: (pagina: number) => void;
  togleTheme: () => void;
  setCardsOnPagina: (value: number) => void;
  setSearchParam: (value: string) => void;
  setBasket: (cards: card[]) => void;
}
type Props = { children: ReactNode };
export const Context = createContext<contextType | null>(null);

export const ContextProvider = ({ children }: Props) => {
  const [checkedProduct, setCeckedProduct] = useState<card | null>(null);
  const [activePagina, setActivePagina] = useState(1);
  const [isDark, setDark] = useState(false);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);
  const [searchParam, setSearchParam] = useState('');
  const [basket, setBasket] = useState<card[]>([]);

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
    searchParam,
    setSearchParam,
    basket,
    setBasket,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
