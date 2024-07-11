import React, { useEffect } from 'react';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import { card } from './assets/types/types';
import { Pagination } from './components/Pagination/Paginatin';
import './App.css';

const App = () => {
  const [arrFromApi, setArrFromApi] = React.useState<card[] | null>(null);
  const [searchParam, setSearchParam] = React.useState<string>('');
  const [cardsOnPagina, setCardsOnPagina] = React.useState(3);
  const [activePagina, setActivePagina] = React.useState(1);

  const getSearchParam = (value: string) => {
    setSearchParam(value);
  };

  const getArrFromApi = async (searchParam: string) => {
    const searchBy = searchParam ? `?search=${searchParam}` : '';
    const url = `https://66716cbfe083e62ee43b8e10.mockapi.io/books${searchBy}`;
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          result === 'Not found' ? setArrFromApi(null) : setArrFromApi(result);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    getArrFromApi(searchParam);
    setActivePagina(1);
  }, [searchParam, cardsOnPagina]);

  return (
    <>
      <Header onClick={getSearchParam} searchParam={searchParam} />
      <Main
        arr={arrFromApi}
        cardsOnPagina={cardsOnPagina}
        activePagina={activePagina}
      />
      <Pagination
        arrFromApi={arrFromApi}
        setCardsOnPagina={setCardsOnPagina}
        cardsOnPagina={cardsOnPagina}
        activePagina={activePagina}
        setActivePagina={setActivePagina}
      />
    </>
  );
};

export default App;
