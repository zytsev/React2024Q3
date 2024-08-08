import { useContext } from 'react';
import { Context } from './Context';

export const useCoffee = () => {
  const coffeeContext = useContext(Context);
  if (!coffeeContext) {
    throw new Error('useCoffee must be used with provider');
  }
  return coffeeContext;
};
