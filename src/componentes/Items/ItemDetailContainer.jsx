import React, { useEffect, useState } from 'react'
import { promesaDetails } from '../utiliadades/promesas';
import ItemDetail from './ItemDetail';
import s from './ItemListContainer.module.css'




function ItemDetailContainer() {

 const [producto, setProducto] = useState({})

  useEffect(() =>{
    promesaDetails()
    .then(resultado => setProducto(resultado))
    .catch(error => console.log(error));
}, [producto])
   

  return (
    
      <>
        <div className={s.ItemDetail}>
          <ItemDetail producto={producto}/>
        </div>
      </>
    
  )
}

export default ItemDetailContainer