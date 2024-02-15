import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MovieDetail from './pages/movie/movieDetail/MovieDetail';
import Collections from './pages/collection/Collections';
import Explore from './pages/explore/Explore';
import SearchResult from './pages/searchResult/SearchResult';
import UserPage from './pages/UserPage/UserPage';
import Toast from './components/common/Toast';
import { Contexts } from './context/ContextApi';

export default function App() {
  // const { showToast } =  useContext(Contexts)
  return (
    <div className='bg-gray-900'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/explore/:media' element={<Explore />} />
          <Route path='/search/:query' element={<SearchResult />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
          <Route path='/profile' element={<UserPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
