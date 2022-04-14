import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { promesaDetails } from '../utiliadades/promesas'





function ItemDetailContainer() {

 const [producto, setProducto] = useState({})
 const { id } = useParams();

 useEffect(() => {
  promesaDetails(id)
    .then((res) => {
      setProducto(res)
  })
    .catch((error) => {
      console.log(error);
  });

  },[id]);

  return (
    
      <>
        <div >
          <ItemDetail producto={producto}/>
        </div>
      </>
    
  )
}

export default ItemDetailContainer