import React, { useContext, useEffect } from 'react';
import style from './search.module.css';
//import { SearchProps } from '../../assets/types/types';
import Btn from '../btn/btn';
//import { Link, useSearchParams } from 'react-router-dom';
// import { useAppDispatch } from '../../../src/redux/store';
// import { setSearchParam } from '../../../src/redux/slice/searchParamSlice';
import { Context } from '../Context/Context';
import { Form, Link } from '@remix-run/react';

const Search = () => {
  const [search, setSearch] = React.useState('');
  //const [searchParams, setSearchParams] = useSearchParams();
  const context = useContext(Context);
  // const dispatch = useAppDispatch();

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
    // dispatch(setSearchParam(value));
    //setSearchParams({ search: value });
    console.log(value);

    context?.setActivePagina(1);
  };
  return (
    <>
      <Form id="search-form" role="search" className={style.search_wrapper}>
        <label>
          {' '}
          Input name of coffee, tea or dessert:
          <input
            value={search}
            onChange={(e) => addSearchParam(e.target.value)}
            className="style.search_input"
            id="search-input"
            name="search"
            placeholder="Search"
            type="search"
          />
        </label>
        <Link to="/products">
          <Btn
            onClick={() => sendSearchParam(search)}
            text="Search"
            data-testid="Search"
          />
        </Link>
      </Form>
    </>
  );
};

export default Search;
