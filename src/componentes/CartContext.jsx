/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react'


export const Context = createContext();

function CartContext({ children }) {
    
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {

    const indexProduct = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (indexProduct !== -1) {
      const newCart = [...cart];

      newCart[indexProduct].cantidad = newCart[indexProduct].cantidad + item.cantidad;
      setCart(newCart);

    } else {
      setCart([...cart, item]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  }
  const buy =() => setCart([]);
  const clear = () => setCart([]);

  const totalCart = cart.reduce((total, item) => total + item.cantidad, 0);

  const totalPrice = cart.reduce((total, item) => total + item.cantidad * item.price, 0);


  return (
    <Context.Provider value={{cart, addToCart, clear, buy, removeItem, totalPrice, totalCart}}>
     {children}
    </Context.Provider>
  )
}

export default CartContext
  