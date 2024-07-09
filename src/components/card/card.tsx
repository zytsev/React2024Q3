import style from './card.module.css';
import { card } from '../../assets/types/types';

const Card = (paramFromApi: card) => {
  return (
    <div className="list_container">
      <div className={paramFromApi.imgClass}></div>
      <h3 className={style.list_title}>{paramFromApi.title}</h3>
      <p className={style.list_text}>{paramFromApi.text}</p>
      <p className={style.list_price}>${paramFromApi.price}</p>
    </div>
  );
};

export default Card;
