import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/Nav'
import Home from './pages/Home'
import MovieList from './pages/MovieList'
import Favorite from './pages/Favorite'

import './style/style.css';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie_list" element={<MovieList />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
