
import React from 'react';
import ItemListContainer from './componentes/Items/ItemListContainer';
import NabVar from './componentes/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './componentes/Items/ItemDetailContainer';


function App() {
  return (
    <> 
      <BrowserRouter>
        <NabVar/>
        <ItemDetailContainer/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/category/:id" element={<ItemListContainer/>} />
          <Route exact path="/item/:id" element={<ItemDetailContainer/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;
