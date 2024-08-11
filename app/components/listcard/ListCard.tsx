//import '../../app/index.css';
import NotFound from '../notfound/notfound';
import style from './cards.module.css';
//import { useContext } from 'react';
import useCoffee from '../../services/context/useCoffee';
//import { useAppSelector } from '../../redux/store';
//import { useGetAllCoffeeQuery } from '../../redux/coffeeApi/coffeeApi';
//import { selectSearchParam } from '../../redux/selectors/selectors';
import { propsListcard } from '../../assets/types/types';
import Card from '../card/card';
import { Outlet } from '@remix-run/react';
import Pagination from '../pagination/paginatin';
import PopUp from '../PopUp/popUp';

const ListCard = ({ data }: propsListcard) => {
  const { activePagina, cardsOnPagina, isDark } = useCoffee();

  const isLoading = false;
  const error = false;

  let arrFromApi = data;

  const maxcards = cardsOnPagina * activePagina;
  arrFromApi && !error
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <section className={`${isDark && 'backgr-dark'}`}>
        <div className="main-container ">
          <div className={style.main_wrapper}>
            {arrFromApi.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
          <Outlet />
        </div>
        {data === null && <NotFound />}
        <Pagination arrFromApi={data} />
        <PopUp />
      </section>
    </>
  );
};

export default ListCard;
