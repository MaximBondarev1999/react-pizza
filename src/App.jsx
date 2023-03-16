
import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Cart from './component/pages/Cart';
import Error from './component/pages/Error';
import Home from './component/pages/Home';
import './scss/app.scss';

export const SearchContext = createContext()





function App() {
  const [searchValue, setSearchValue] = useState('')
  return (
    <div className="wrapper">

      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home searchValue={searchValue} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </SearchContext.Provider>

    </div >
  )
}

export default App;
