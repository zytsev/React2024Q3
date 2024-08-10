import style from './pagination.module.css';
import useCoffee from '../../services/context/useCoffee';
import { card } from '../../assets/types/types';
interface PropsPagination {
  arrFromApi: card[] | null | undefined;
}
const Pagination = (props: PropsPagination) => {
  const { activePagina, cardsOnPagina, setActivePagina, setCardsOnPagina } =
    useCoffee();
  const { arrFromApi } = props;
  const cardsOnPaginaFromContext = cardsOnPagina || 3;

  let numberOfPaginas: number;
  arrFromApi
    ? (numberOfPaginas = Math.ceil(
        arrFromApi.length / cardsOnPaginaFromContext
      ))
    : (numberOfPaginas = 1);
  const arrPaginas = Array.from(Array(numberOfPaginas).keys()).map(
    (i) => i + 1
  );

  return (
    <div className={style.PGNroot}>
      <svg
        onClick={
          activePagina !== 1
            ? () => setActivePagina(activePagina - 1)
            : () => setActivePagina(activePagina)
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
            onClick={() => setActivePagina(item)}
            className={activePagina === item ? style.PGNliActive : style.PGNli}
            data-testid={item}
          >
            {item}
          </li>
        ))}
      </ul>
      <svg
        onClick={
          activePagina !== arrPaginas.length
            ? () => setActivePagina(activePagina + 1)
            : () => setActivePagina(activePagina)
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
          value={cardsOnPaginaFromContext}
          onChange={(e) => {
            setCardsOnPagina(Number(e.target.value));
            setActivePagina(1);
          }}
        >
          <option>3</option>
          <option>6</option>
          <option>9</option>
        </select>
      </label>
    </div>
  );
};

export default Pagination;
