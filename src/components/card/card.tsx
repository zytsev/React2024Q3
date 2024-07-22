import style from './card.module.css';
import { card } from '../../assets/types/types';
import { Context } from '../../components/Context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

const Card = (paramFromApi: card) => {
  const context = useContext(Context);
  return (
    <Link to={`card/${paramFromApi.id}`} style={{ color: '#213547' }}>
      <div
        onClick={() => context?.getProd(paramFromApi.id)}
        className="list_container"
        data-testid="card"
      >
        <div className={paramFromApi.imgClass}></div>
        <h3 className={style.list_title}>{paramFromApi.title}</h3>
        <p className={style.list_text}>{paramFromApi.text}</p>
        <p className={style.list_price}>${paramFromApi.price}</p>
      </div>
    </Link>
  );
};

export default Card;
