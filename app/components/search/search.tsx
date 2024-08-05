'use client';

import React, { useContext, useEffect } from 'react';
import style from './search.module.css';
//import { SearchProps } from '../../assets/types/types';
import Btn from '../btn/btn';
//import { Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../../src/redux/store';
import { setSearchParam } from '../../../src/redux/slice/searchParamSlice';
import { Context } from '../../../src/components/Context/Context';
import Link from 'next/link';

const Search = () => {
  const [search, setSearch] = React.useState('');
  //const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(Context);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const searchFromLS = window.localStorage.getItem('React2024Q3');
    setSearch(searchFromLS ? searchFromLS : '');
  }, []);
  useEffect(() => {
    return () => {
      window.localStorage.setItem('React2024Q3', search);
    };
    //localStorage.setItem('React2024Q3', search);
  });

  const addSearchParam = (value: string) => {
    setSearch(value);
    //setSearchParams({ search: value });
  };
  const sendSearchParam = (value: string) => {
    dispatch(setSearchParam(value));
    //setSearchParams({ search: value });
    context?.setActivePagina(1);
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
      <Link href="/main">
        <Btn
          onClick={() => sendSearchParam(search)}
          text="Search"
          data-testid="Search"
        />
      </Link>
    </div>
  );
};

export default Search;
