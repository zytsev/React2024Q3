//import '../../app/index.css';
import NotFound from '../notfound/notfound';
import style from './cards.module.css';
//import { useContext } from 'react';
import useCoffee from '../../services/context/useCoffee';
//import { useAppSelector } from '../../redux/store';
//import { useGetAllCoffeeQuery } from '../../redux/coffeeApi/coffeeApi';
//import { selectSearchParam } from '../../redux/selectors/selectors';
import { card } from '../../assets/types/types';
import Card from '../card/card';
import { Outlet } from '@remix-run/react';
import Pagination from '../pagination/paginatin';
import PopUp from '../PopUp/popUp';
interface propsListcard {
  data: card[] | null;
}

const ListCard = ({ data }: propsListcard) => {
  const { activePagina, cardsOnPagina, isDark } = useCoffee();
  //const cardsOnPagina = context?.cardsOnPagina || 3;
  //const activePagina = context?.activePagina || 1;

  // const searchParam = useAppSelector(selectSearchParam);
  //const { data, error, isLoading } = useGetAllCoffeeQuery(searchParam);
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
        <div className="listWrapper">
          <div className={style.main_wrapper}>
            {arrFromApi.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
        {data === null && <NotFound />}
        <Pagination arrFromApi={data} />
        <PopUp />
        <Outlet />
      </section>
    </>
  );
};

export default ListCard;
