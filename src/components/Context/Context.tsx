import { createContext, useState, ReactNode } from 'react';
import getApi from '../../services/getApi/getApi';
import { card } from '../../assets/types/types';

interface context {
  checkedProduct: card | null;
  getProd: (id: number) => void;
}
type Props = { children: ReactNode };
export const Context = createContext<context | null>(null);

export const ContextProvider = ({ children }: Props) => {
  const [checkedProduct, setCeckedProduct] = useState<card | null>(null);

  const getProd = async (id: number) => {
    const arr: card[] | null = await getApi(null);
    arr?.forEach((element) => {
      if (element.id === id) setCeckedProduct(element);
    });
  };

  const value = { checkedProduct, getProd };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
