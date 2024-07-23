import React, { useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import { card } from './assets/types/types';
import NotFound from './pages/NotFound/NotFound';
import { DetailedCard } from './components/DetailedCard/DetailedcCard';
import getApi from './services/getApi/getApi';
import { Context } from './components/Context/Context';
import './App.css';
//import { useAppSelector } from './store/store';

const App = () => {
  const context = useContext(Context);
  const [arrFromApi, setArrFromApi] = React.useState<card[] | null>(null);
  const [searchParam, setSearchParam] = React.useState<string>('');
  //const coffee = useAppSelector((state) => state.coffee);

  const getSearchParam = (value: string) => {
    setSearchParam(value);
    context?.setActivePagina(1);
  };

  const getArrFromApi = async (searchParam: string) => {
    setArrFromApi(await getApi(searchParam));
  };

  useEffect(() => {
    getArrFromApi(searchParam);
  }, [searchParam]);

  return (
    <Routes>
      <Route path="/" element={<Header onClick={getSearchParam} />}>
        <Route path="main/" element={<Main arrFromApi={arrFromApi} />}>
          <Route path="card/:id" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
