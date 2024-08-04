import Card from '../Card/card';
import { card } from '../../assets/types/types';
import style from './cards.module.css';

type Pros = {
  arr: card[];
};

const Cards = (props: Pros) => {
  return (
    <div className="listWrapper">
      <div className={style.main_wrapper}>
        {props.arr.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
