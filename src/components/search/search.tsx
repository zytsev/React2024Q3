//import React from 'react';
import style from './search.module.css';
import { SearchProps } from '../../assets/types/types';
import Btn from '../Btn/Btn';

const Search = (props: SearchProps) => {
  return (
    <div className={style.search_wrapper}>
      <label>
        {' '}
        Input name of coffee, tea or dessert:
        <input
          type="text"
          value={props.searchParam}
          onChange={props.onChange}
          className="style.search_input"
        />
      </label>
      <Btn onClick={props.onClick} text="Search" />
    </div>
  );
};

export default Search;
