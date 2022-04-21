/* eslint-disable no-unused-vars */

import React, { useState, useContext } from 'react'
import Button from 'react-bootstrap/Button'
import s from "./ItemCount.module.css"
import { Context } from '../CartContext'

function ItemCount({inicial ,stock , addCart,producto}) {

    const { addToCart } = useContext(Context);
    
    const [count, setCount] = useState(inicial)

    function sumarCarrito(){
        if (count < stock)
        setCount(count + 1)
    }
    
    function restarCarrito(){
        if (count > inicial){
        setCount(count - 1)}
    }
    const handleClick = () => {
        addCart(count)
        addToCart({...producto, cantidad: count});
        setCount(1);
    }
  return (
    <div>
        <div className={s.botones}>
            <Button variant="dark" onClick={restarCarrito}>-</Button>

            <span className={s.contador}>{count}</span>

            <Button variant="dark"  onClick={sumarCarrito}>+</Button>
        </div>
        <div className={s.botonAgregar}>
            <Button onClick={handleClick} variant="dark">Agregar al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount