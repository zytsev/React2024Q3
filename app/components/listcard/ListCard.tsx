//import '../../app/index.css';
import NotFound from '../notfound/notfound';
import style from './cards.module.css';
//import { useContext } from 'react';
import { useCoffee } from '../Context/useCoffee';
//import { useAppSelector } from '../../redux/store';
//import { useGetAllCoffeeQuery } from '../../redux/coffeeApi/coffeeApi';
//import { selectSearchParam } from '../../redux/selectors/selectors';
import { card } from '../../../src/assets/types/types';
import Card from '../card/card';
interface propsListcard {
  data: card[];
}

const ListCard = (props: propsListcard) => {
  const { activePagina, cardsOnPagina } = useCoffee();
  //const cardsOnPagina = context?.cardsOnPagina || 3;
  //const activePagina = context?.activePagina || 1;

  // const searchParam = useAppSelector(selectSearchParam);
  //const { data, error, isLoading } = useGetAllCoffeeQuery(searchParam);
  const isLoading = false;
  const error = false;
  let arrFromApi = props.data;
  const maxcards = cardsOnPagina * activePagina;
  arrFromApi && !error
    ? (arrFromApi = arrFromApi.slice(maxcards - cardsOnPagina, maxcards))
    : (arrFromApi = []);

  return (
    <>
      {isLoading && <h2>Loading...</h2>}
      <div className="listWrapper">
        <div className={style.main_wrapper}>
          {arrFromApi.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>

      {error && <NotFound />}
    </>
  );
};

export default ListCard;
