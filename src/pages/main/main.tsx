import style from './main.module.css';
import Card from '../../components/Card/Card';
import NotFound from '../NotFound/NotFound';
//import { MainProps } from '../../assets/types/types';
import { Pagination } from '../../components/Pagination/Paginatin';
import { useState, useContext } from 'react';
import { Context } from '../../components/Context/Context';
import { useAppSelector } from '../../store/store';
import { Outlet } from 'react-router-dom';
import PopUp from '../../components/PopUp/popUp';
import { useGetAllCoffeeQuery } from '../../services/coffeeApi/coffeeApi';

const Main = () => {
  const context = useContext(Context);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);
  const activePagina = context?.activePagina || 1;
  const idCheckedCard = useAppSelector(
    (state) => state.checkCard.idCheckedCard
  );
  const searchParam = useAppSelector((state) => state.searchParam.searchParam);
  const { data, error, isLoading } = useGetAllCoffeeQuery(searchParam);

  let arrFromApi = data;
  const maxcards = cardsOnPagina * activePagina;
  arrFromApi && !error
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <div>
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
      {idCheckedCard.length > 0 && <PopUp />}
    </div>
  );
};

export default Main;
