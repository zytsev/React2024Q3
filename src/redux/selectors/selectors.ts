import { StateCheckCard } from '../slice/checkCardSlice';
import { StateSearchParam } from '../slice/searchParamSlice';

export const selectCheckCard = (state: {
  checkedCards?: {
    id: number;
    raiting: number;
    category: string;
    imgClass: string;
    title: string;
    text: string;
    price: number;
  }[];
  checkCard?: StateCheckCard | undefined;
}) => state.checkCard?.checkedCards;

export const selectSearchParam = (state: { searchParam: StateSearchParam }) =>
  state.searchParam.searchParam;
