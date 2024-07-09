import style from './header.module.css';
import Search from '../../components/search/search';
import Btn from '../../components/Btn/Btn';
import { HeaderProps } from '../../assets/types/types';

const Header = (props: HeaderProps) => {
  return (
    <div className={style.header_wrapper}>
      <Search {...props} />
      <Btn text="Error" />
    </div>
  );
};

export default Header;
