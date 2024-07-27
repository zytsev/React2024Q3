import React, { useContext, useEffect } from 'react';
import style from './search.module.css';
//import { SearchProps } from '../../assets/types/types';
import Btn from '../Btn/Btn';
import { Link, useSearchParams } from 'react-router-dom';
import { useAppDispatch } from '../../services/redux/store/store';
import { setSearchParam } from '../../services/redux/slice/searchParamSlice';
import { Context } from '../Context/Context';

const Search = () => {
  const searchFromLS = localStorage.getItem('React2024Q3');
  const [search, setSearch] = React.useState(searchFromLS ? searchFromLS : '');
  const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(Context);
  const dispatch = useAppDispatch();

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
    dispatch(setSearchParam(value));
    setSearchParams({ search: value });
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
      <Link to={`/main?search=${searchParams.get('search')}`}>
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
