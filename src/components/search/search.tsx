import style from './search.module.css';
import React from 'react';
import { HeaderProps } from '../../pages/header/header';

class Search extends React.Component<HeaderProps> {
  render(): React.ReactNode {
    return (
      <div className={style.search_wrapper}>
        <label>
          {' '}
          Input name of coffee:
          <input type="text" className="style.search_input"></input>
        </label>
        <button onClick={() => this.props.func('')} type="button">
          Search
        </button>
      </div>
    );
  }
}

export default Search;
