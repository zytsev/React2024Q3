import { useContext } from 'react';
import { Context } from './context';

const useCoffee = () => {
  const coffeeContext = useContext(Context);
  if (!coffeeContext) {
    throw new Error('useCoffee must be used with provider');
  }
  return coffeeContext;
};
export default useCoffee;
