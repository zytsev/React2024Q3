import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import UnCForm from './components/UnCForm';
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="control" element={<Form />} />
        <Route path="/" element={<Cards />} />
        <Route path="uncontrol" element={<UnCForm />} />
      </Route>
    </Routes>
  );
}

export default App;
