import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header/Header';
import Main from './pages/Main/Main';
import NotFound from './pages/NotFound/NotFound';
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
