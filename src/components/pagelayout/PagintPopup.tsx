'use client';

import { Pagination } from '../../components/Pagination/Paginatin';

import { useAppSelector } from '../../redux/store';
import PopUp from '../../components/PopUp/popUp';
import { useGetAllCoffeeQuery } from '../../redux/coffeeApi/coffeeApi';
import {
  selectCheckCard,
  selectSearchParam,
} from '../../redux/selectors/selectors';

const PagintPopup = () => {
  const checkedCards = useAppSelector(selectCheckCard);
  const searchParam = useAppSelector(selectSearchParam);
  const { data } = useGetAllCoffeeQuery(searchParam);

  return (
    <>
      <Pagination arrFromApi={data} />
      {checkedCards && checkedCards.length > 0 && <PopUp />}
    </>
  );
};

export default PagintPopup;
