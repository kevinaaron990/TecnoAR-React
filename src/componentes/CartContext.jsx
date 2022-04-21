import React, { createContext, useState } from 'react'


export const Context = createContext();

function CartContext({ children }) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {

        const indexProducto = cart.findIndex((producto) => producto.id === product.id);
        if(indexProducto !== -1){
            const newCart = [...cart];
            newCart[indexProducto].cantidad = newCart[indexProducto].cantidad + product.cantidad;
            setCart(newCart);
        }else{
            setCart([...cart, product])
        }
        console.log(product)
    }
   

    const removeCart = (product) => {
        setCart(cart.filter((producto) => producto.id !== product.id));
    }

    const buy =() => setCart([]);
  return (
    <Context.Provider value={{cart, addToCart, removeCart, buy}}>
     {children}
    </Context.Provider>
  )
}

export default CartContext