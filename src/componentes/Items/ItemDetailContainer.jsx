import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import s from './ItemListContainer.module.css'
import productos from '../utiliadades/productos';




function ItemDetailContainer() {

  const { id } = useParams();

 const [producto, setProducto] = useState({})

 useEffect(() => {

    
  const promesaDetails1 = new Promise((res, rej) =>{
      setTimeout(() =>{
          if(id){
              res(productos.filter(item => item.id === id));
          }else{
              res(productos)
          }
      },2000)
  })
  promesaDetails1.then((res) => {
    setProducto(res)
  })
},[id])

  return (
    
      <>
        <div className={s.ItemDetail}>
          <ItemDetail producto={producto}/>
        </div>
      </>
    
  )
}

export default ItemDetailContainer