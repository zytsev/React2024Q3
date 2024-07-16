export interface card {
  id: number;
  raiting: number;
  category: string;
  imgClass: string;
  title: string;
  text: string;
  price: number;
}
export interface BtnProps {
  text: string;
  onClick?: () => void;
}
export interface HeaderProps {
  onClick: (value: string) => void;
  searchParam: string | undefined;
}
export interface SearchProps extends HeaderProps {}
export interface MainProps {
  arrFromApi: card[] | null;
  // cardsOnPagina: number;
  // activePagina: number;
}
export interface PropsPagination {
  arrFromApi: card[] | null;
  setCardsOnPagina: (i: number) => void;
  cardsOnPagina: number;
}
export interface PropsDetailedCard {
  paramCard: card;
  showCard: () => void;
}
