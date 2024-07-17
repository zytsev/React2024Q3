import React, { useEffect } from 'react';
import style from './search.module.css';
import { SearchProps } from '../../assets/types/types';
import Btn from '../Btn/Btn';
import { Link, useSearchParams } from 'react-router-dom';

const Search = (props: SearchProps) => {
  const searchFromLS = localStorage.getItem('React2024Q3');
  const [search, setSearch] = React.useState(searchFromLS ? searchFromLS : '');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    return () => {
      localStorage.setItem('React2024Q3', search);
    };
  });
  const addSearchParam = (value: string) => {
    setSearch(value);
    setSearchParams({ search: value });
  };
  const sendSearchParam = (value: string) => {
    props.onClick(value);
    setSearchParams({ search: value });
  };
  return (
    <div className={style.search_wrapper}>
      <label>
        {' '}
        Input name of coffee, tea or dessert:
        <input
          type="text"
          value={search}
          onChange={(e) => addSearchParam(e.target.value)}
          className="style.search_input"
        />
      </label>
      <Link to={`/main?search=${searchParams.get('search')}`}>
        <Btn onClick={() => sendSearchParam(search)} text="Search" />
      </Link>
    </div>
  );
};

export default Search;
