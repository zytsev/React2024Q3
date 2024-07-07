import style from './header.module.css';
import React from 'react';
import Search from '../../components/search/search';
import ErrorBtn from '../../components/errorBtn/errorBtn';

export interface HeaderProps {
  func: (param: string) => void;
}

class Header extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <div className={style.header_wrapper}>
        <Search func={this.props.func} />
        <ErrorBtn />
      </div>
    );
  }
}

export default Header;
