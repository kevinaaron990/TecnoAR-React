
import React, { useContext } from 'react';
import { Context } from '../CartContext';
import Cart from './Cart';




function CartContainer() {

 

  const { cart, clear, buy, removeItem} = useContext(Context);

  console.log(cart);

  return (
    <>
      <Cart cart={cart} clear={clear} removeItem={removeItem} buy={buy} />
    </>
  )};

export default CartContainer