import style from './main.module.css';
import Card from '../../components/Card/Card';
import { MainProps } from '../../assets/types/types';

const Main = (props: MainProps) => {
  let arrFromApi = props.arr;
  const maxcards = props.cardsOnPagina * props.activePagina;
  arrFromApi
    ? (arrFromApi = arrFromApi.slice(maxcards - props.cardsOnPagina, maxcards))
    : (arrFromApi = []);
  return (
    <div className={style.main_wrapper}>
      {arrFromApi.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Main;
