
import React from 'react';
import ItemListContainer from './componentes/Items/ItemListContainer';
import NabVar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './componentes/ItemDetails/ItemDetailContainer';
import CartContainer from './componentes/Cart/CartContainer';
import ContextProvider from './componentes/CartContext';
import CheckOutContainer from './componentes/CheckOut/CheckOutContainer'
import Footer from './Footer/Footer';


function App() {
  return (
    <> 
    <ContextProvider>
      <BrowserRouter>
        <NabVar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer/>} />
          <Route exact path="/Item/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<CartContainer/>} />
          <Route exact path="/checkOut" element= {<CheckOutContainer/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </ContextProvider>
    
    </>
  );
}


export default App;
