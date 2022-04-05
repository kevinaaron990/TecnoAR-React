/* eslint-disable no-unused-vars */

import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import s from "./ItemCount.module.css"

function ItemCount({stock}) {
    const [count, setCount] = useState(1)

    function sumarCarrito (){
        if(count < stock){
   
        setCount(count + 1);
    }}
    function restarCarrito (){
        if(count > 1){
        setCount(count -1);
    }
}
    function onAdd(){
        alert('agregaste ' + count +  ' productos al carrito')
    }
  return (
    <div>
        <div className={s.botones}>
            <Button onClick={sumarCarrito} variant="dark">+</Button>
            <span className={s.contador}>{count}</span>
            <Button onClick={restarCarrito} variant="dark">-</Button>
        </div>
        <div className={s.botonAgregar}>
            <Button  onClick={onAdd} variant="dark">Agregar al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount