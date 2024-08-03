import { Routes, Route } from 'react-router-dom';
import Header from './components/forpages/header/page';
import Main from './pagesOld/Main/ListCard';
import NotFound from './components/forpages/notfound/page';
import { DetailedCard } from './components/DetailedCard/DetailedcCard';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="main/" element={<Main />}>
          <Route path="card/:id" element={<DetailedCard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
