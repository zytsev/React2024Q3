import React, { useEffect } from 'react';
import style from './search.module.css';
import { SearchProps } from '../../assets/types/types';
import Btn from '../Btn/Btn';
import { Link } from 'react-router-dom';

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
      <Link to={'main'}>
        <Btn onClick={() => props.onClick(search)} text="Search" />
      </Link>
    </div>
  );
};

export default Search;
