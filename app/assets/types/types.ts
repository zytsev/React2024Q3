export interface card {
  id: number;
  raiting: number;
  category: string;
  imgClass: string;
  title: string;
  text: string;
  price: number;
}
export interface cardToCSV {
  category: string;
  raiting: number;
  title: string;
  text: string;
  price: number;
}
export interface BtnProps {
  text: string;
  onClick?: () => void;
}
export interface PropsPagination {
  arrFromApi: card[] | null | undefined;
}
export interface PropsDetailedCard {
  paramCard: card;
  showCard: () => void;
}
export interface propsListcard {
  data: card[] | null;
}
export interface contextType {
  searchParam: string;
  activePagina: number;
  isDark: boolean;
  cardsOnPagina: number;
  basket: card[];
  setActivePagina: (pagina: number) => void;
  togleTheme: () => void;
  setCardsOnPagina: (value: number) => void;
  setSearchParam: (value: string) => void;
  setBasket: (cards: card[]) => void;
}
