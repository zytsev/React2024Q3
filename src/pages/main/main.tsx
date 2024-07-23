import style from './main.module.css';
import Card from '../../components/Card/Card';
import { MainProps } from '../../assets/types/types';
import { Pagination } from '../../components/Pagination/Paginatin';
import { useState } from 'react';
import { useContext } from 'react';
import { Context } from '../../components/Context/Context';

import { Outlet } from 'react-router-dom';
import PopUp from '../../components/PopUp/popUp';

const Main = (props: MainProps) => {
  const context = useContext(Context);
  const [cardsOnPagina, setCardsOnPagina] = useState(3);
  const activePagina = context?.activePagina || 1;

  let arrFromApi = props.arrFromApi;
  const maxcards = cardsOnPagina * activePagina;
  arrFromApi
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <div>
      <div className="main-container">
        <div className="listWrapper">
          <div className={style.main_wrapper}>
            {arrFromApi.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
        <Outlet />
      </div>

      <Pagination
        arrFromApi={props.arrFromApi}
        setCardsOnPagina={setCardsOnPagina}
        cardsOnPagina={cardsOnPagina}
      />
      <PopUp />
    </div>
  );
};

export default Main;
