import React, { useEffect } from 'react';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import { card } from './assets/types/types';
import './App.css';

const App = () => {
  const [arrFromApi, setArrFromApi] = React.useState<card[] | null>(null);
  const [searchParam, setSearchParam] = React.useState<string>('');

  const getSearchParam = (value: string) => {
    setSearchParam(value);
  };

  const getArrFromApi = (searchParam: string) => {
    const searchBy = searchParam ? `?search=${searchParam}` : '';
    const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books${searchBy}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setArrFromApi(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getArrFromApi(searchParam);
  }, [searchParam]);

  return (
    <>
      <Header onClick={getSearchParam} searchParam={searchParam} />
      <Main arr={arrFromApi} />
    </>
  );
};

export default App;
