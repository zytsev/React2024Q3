import style from './card.module.css';
import { card } from '../../assets/types/types';
import { Link } from 'react-router-dom';
import { Context } from '../../components/Context/Context';
import { useContext } from 'react';
import { setCheckedCards } from '../../services/redux/slice/checkCardSlice';
import {
  useAppSelector,
  useAppDispatch,
} from '../../services/redux/store/store';

const Card = (paramFromApi: card) => {
  const context = useContext(Context);
  const dispatch = useAppDispatch();
  const checkedCards = useAppSelector((state) => state.checkCard.checkedCards);

  const togleCheckbox = (prod: card) => {
    dispatch(setCheckedCards(prod));
  };

  return (
    <div
      onClick={() => context?.getProd(paramFromApi.id)}
      className="list_container"
      data-testid="card"
    >
      <Link to={`card/${paramFromApi.id}`} style={{ color: '#213547' }}>
        <div className={`${paramFromApi.imgClass} img_card`}></div>
        <h3 className={style.list_title}>{paramFromApi.title}</h3>
        <p className={style.list_text}>{paramFromApi.text}</p>
      </Link>
      <div className={style.list_wrap}>
        <p className={style.list_price}>${paramFromApi.price}</p>
        <label className={style.card_checkbox}>
          Select
          <input
            type="checkbox"
            checked={checkedCards.map((e) => e.id).includes(paramFromApi.id)}
            onChange={() => togleCheckbox(paramFromApi)}
          />
        </label>
      </div>
    </div>
  );
};

export default Card;
