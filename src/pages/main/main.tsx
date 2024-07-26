import style from './main.module.css';
import Card from '../../components/Card/Card';
import NotFound from '../NotFound/NotFound';
//import { MainProps } from '../../assets/types/types';
import { Pagination } from '../../components/Pagination/Paginatin';
import { useState, useContext } from 'react';
import { Context } from '../../components/Context/Context';
import { useAppSelector } from '../../services/redux/store/store';
import { Outlet } from 'react-router-dom';
import PopUp from '../../components/PopUp/popUp';
import { useGetAllCoffeeQuery } from '../../services/redux/coffeeApi/coffeeApi';
import {
  selectCheckCard,
  selectSearchParam,
} from '../../services/redux/selectors/selectors';

const Main = () => {
  const context = useContext(Context);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);
  const activePagina = context?.activePagina || 1;
  const checkedCards = useAppSelector(selectCheckCard);
  const searchParam = useAppSelector(selectSearchParam);
  const { data, error, isLoading } = useGetAllCoffeeQuery(searchParam);

  let arrFromApi = data;
  const maxcards = cardsOnPagina * activePagina;
  arrFromApi && !error
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <div className={`${context?.isDark && 'backgr-dark'}`}>
      <div className="main-container">
        {isLoading && <h2>Loading...</h2>}
        <div className="listWrapper">
          <div className={style.main_wrapper}>
            {arrFromApi.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
        {error && <NotFound />}
        <Outlet />
      </div>

      <Pagination
        arrFromApi={data}
        setCardsOnPagina={setCardsOnPagina}
        cardsOnPagina={cardsOnPagina}
      />
      {checkedCards && checkedCards.length > 0 && <PopUp />}
    </div>
  );
};

export default Main;
