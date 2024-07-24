import style from './card.module.css';
import { card } from '../../assets/types/types';
import { Context } from '../../components/Context/Context';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { setIdCheckedCard } from '../../slice/checkCardSlice';
import { useAppSelector, useAppDispatch } from '../../store/store';

const Card = (paramFromApi: card) => {
  const context = useContext(Context);
  const dispatch = useAppDispatch();
  const idCheckedCard = useAppSelector(
    (state) => state.checkCard.idCheckedCard
  );

  const togleCheckbox = (id: number) => {
    dispatch(setIdCheckedCard({ id }));
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
            checked={idCheckedCard.includes(paramFromApi.id)}
            onChange={() => togleCheckbox(paramFromApi.id)}
          />
        </label>
      </div>
    </div>
  );
};

export default Card;
