import React, { useEffect } from 'react';
import style from './search.module.css';

import { Form } from '@remix-run/react';
import useCoffee from '../../services/context/useCoffee';

const Search = () => {
  const [search, setSearch] = React.useState('');

  const { setActivePagina } = useCoffee();

  useEffect(() => {
    const searchFromLS = window.localStorage.getItem('React2024Q3');
    setSearch(searchFromLS ? searchFromLS : '');
  }, []);

  const addSearchParam = () => {
    setActivePagina(1);
    window.localStorage.setItem('React2024Q3', search);
  };

  return (
    <>
      <Form id="search-form" className={style.search_wrapper}>
        <label>
          {' '}
          Input name of coffee, tea or dessert:
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="style.search_input"
            id="search-input"
            name="search"
            placeholder="Search all..."
            type="search"
          />
        </label>

        <button onClick={() => addSearchParam()} data-testid="Search">
          Search
        </button>
      </Form>
    </>
  );
};

export default Search;
