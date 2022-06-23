import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Navbar from './components/navbar';
import Books from './components/books';
import Categories from './components/categories';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/books" element={<Books />} />
        <Route exact path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
