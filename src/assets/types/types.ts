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
  onClick: () => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchParam: string | undefined;
}
export interface SearchProps extends HeaderProps {}
export interface MainProps {
  arr: card[] | null;
}
