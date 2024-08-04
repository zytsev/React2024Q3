import { Routes, Route } from 'react-router-dom';
import Header from './app/header/page';
import Main from './pages/main/ListCard';
import NotFound from './app/notfound/page';
import DetailedCard from './app/main/card/[id]/page';
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
