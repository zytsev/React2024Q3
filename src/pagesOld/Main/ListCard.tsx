'use client';
import '../../../src/components/forpages/index.css';
import NotFound from '../../components/forpages/notfound/page';
//import { MainProps } from '../../assets/types/types';

import { useContext } from 'react';
import { Context } from '../../components/Context/Context';
import { useAppSelector } from '../../redux/store';
import { useGetAllCoffeeQuery } from '../../redux/coffeeApi/coffeeApi';
import { selectSearchParam } from '../../redux/selectors/selectors';
import Cards from '../../components/Cards/page';

const ListCard = () => {
  const context = useContext(Context);
  const cardsOnPagina = context?.cardsOnPagina || 3;
  const activePagina = context?.activePagina || 1;

  const searchParam = useAppSelector(selectSearchParam);
  const { data, error, isLoading } = useGetAllCoffeeQuery(searchParam);

  let arrFromApi = data;
  const maxcards = cardsOnPagina * activePagina;
  arrFromApi && !error
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <Cards arr={arrFromApi} />
      {error && <NotFound />}
    </>
  );
};

export default ListCard;
