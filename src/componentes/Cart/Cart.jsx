import React, { useContext } from 'react'
import { Context } from '../CartContext';
import { Link } from 'react-router-dom';
import s from './Cart.module.css';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Cart() {
  const { cart, removeItem, totalPrice, buy} = useContext(Context); 
  return (
    <div className={s.cartContainer}>
      <div className={s.cartList}>
        <h1 className={s.cartTitle}>Tu Carrito</h1>

       
        {cart.length > 0 ?
          cart.map((item) => (
            <div className={s.cartItem} key={item.id}>
              <img src={item.imagen} alt={item.title} />
              <h2>{item.title}</h2>
              <div >
                <h3>Cantidad</h3>
                <p>{item.cantidad}</p>
              </div>
              <div className={s.priceItem}>
                <h3>Precio</h3>
                <p>${item.price * item.cantidad}</p>
              </div>
              
              <IconButton  onClick={()=>removeItem(item.id)}><DeleteForeverIcon style={{color: "black", margin:'3rem'}} /></IconButton>
            </div>
          )): <p className={s.cartNotification}>Carrito Vacio</p>}
          <span>$ {totalPrice}</span>
          <div className={s.cartTotalSection}>

          {cart.length === 0?
          <Button variant="contained" onClick={buy} disabled>Comprar</Button> : 
          <Link to={"/checkOut"} style={{textDecoration:"none"}}><Button variant="contained">Comprar</Button></Link>}
          <Link to={"/"} style={{textDecoration:"none"}}><Button variant="contained">Seguir Comprando</Button></Link>
        </div>
      </div>
    </div>
       
  
  )
}

export default Cart