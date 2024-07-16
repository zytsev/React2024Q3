import style from './pagination.module.css';
import { PropsPagination } from '../../assets/types/types';
import { useContext } from 'react';
import { Context } from '../Context/Context';

export const Pagination = (props: PropsPagination) => {
  const context = useContext(Context);
  const { arrFromApi, setCardsOnPagina, cardsOnPagina } = props;
  const activePagina = context?.activePagina || 1;

  let numberOfPaginas;
  arrFromApi
    ? (numberOfPaginas = Math.ceil(arrFromApi.length / cardsOnPagina))
    : 1;
  const arrPaginas = [...Array(numberOfPaginas).keys()].map((i) => i + 1);

  return (
    <div className={style.PGNroot}>
      <svg
        onClick={
          activePagina !== 1
            ? () => context?.setActivePagina(activePagina - 1)
            : () => context?.setActivePagina(activePagina)
        }
        xmlns="http://www.w3.org/2000/svg"
        className={style.PGNsvg}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      </svg>
      <ul className={style.PGNul}>
        {arrPaginas.map((item) => (
          <li
            key={item}
            onClick={() => context?.setActivePagina(item)}
            className={activePagina === item ? style.PGNliActive : style.PGNli}
          >
            {item}
          </li>
        ))}
      </ul>
      <svg
        onClick={
          activePagina !== arrPaginas.length
            ? () => context?.setActivePagina(activePagina + 1)
            : () => context?.setActivePagina(activePagina)
        }
        xmlns="http://www.w3.org/2000/svg"
        className={style.PGNsvg}
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M268 112l144 144-144 144M392 256H100"
        />
      </svg>
      <label>
        {' '}
        Show on page:
        <select
          value={props.cardsOnPagina}
          onChange={(e) => setCardsOnPagina(Number(e.target.value))}
        >
          <option>3</option>
          <option>6</option>
          <option>9</option>
        </select>
      </label>
    </div>
  );
};
