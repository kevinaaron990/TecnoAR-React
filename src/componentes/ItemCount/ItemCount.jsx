/* eslint-disable no-unused-vars */

import { Alert } from 'bootstrap';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import s from "./ItemCount.module.css"

function ItemCount({inicial ,stock , onAdd}) {
    
    const [count, setCount] = useState(inicial)

    function sumarCarrito(){
        if (count < stock)
        setCount(count + 1)
    }
    
    function restarCarrito(){
        if (count > 0){
        setCount(count - 1)}
    }
    
  return (
    <div>
        <div className={s.botones}>
            <Button variant="dark" onClick={restarCarrito}>-
            </Button>

            <span className={s.contador}>{count}</span>

            <Button variant="dark"  onClick={sumarCarrito}>+
            </Button>

        </div>
       
        <div className={s.botonAgregar}>
            <Button disabled={count === 0} onClick={( count > stock?null:( ()=> onAdd(count)))} variant="dark">Agregar al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount