import ItemDetailContainer from './components/ItemDetailContainer';
import React from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import Cart from './components/Cart';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import './App.css'


const App = () => {
  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<ItemListContainer/>}></Route>
      <Route path='/category/:id' element={<ItemListContainer />}></Route>
      <Route path='/item/:id' element={<ItemDetailContainer />} ></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
