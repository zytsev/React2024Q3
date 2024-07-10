import React, { useEffect } from 'react';
import style from './search.module.css';
import { SearchProps } from '../../assets/types/types';
import Btn from '../Btn/Btn';

const Search = (props: SearchProps) => {
  const searchFromLS = localStorage.getItem('React2024Q3');
  const [search, setSearch] = React.useState(searchFromLS ? searchFromLS : '');

  useEffect(() => {
    return () => {
      localStorage.setItem('React2024Q3', search);
    };
  });

  return (
    <div className={style.search_wrapper}>
      <label>
        {' '}
        Input name of coffee, tea or dessert:
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="style.search_input"
        />
      </label>
      <Btn onClick={() => props.onClick(search)} text="Search" />
    </div>
  );
};

export default Search;
