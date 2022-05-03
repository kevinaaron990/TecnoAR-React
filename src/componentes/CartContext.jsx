/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState,useEffect } from 'react'


export const Context = createContext();

function CartContext({ children }) {
    
    const [cart, setCart] = useState([]);
    const [cant, setCant] = useState(0)



    const quantityTotal = () => setCant(cart.reduce((total, item) => (total += item.cantidad),0 ));

    const valorTotal  = () => setCant(cart.reduce((total, item) => (total += item.cant * item.price),0 ))
    
  useEffect(() =>{
    quantityTotal();
  }, [cart]);

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
    const removeItem = (( id ) =>{
      
        const newCart = [...cart];
        let index = newCart.findIndex(el => el.id===id);
        newCart.splice(index, 1);
  
        setCart((newCart));
      });

    const clear = () => {
        setCart([]);
    }

    const buy =() => setCart([]);


  return (
    <Context.Provider value={{cart, addToCart, clear, buy, removeItem,cant,valorTotal}}>
     {children}
    </Context.Provider>
  )
}

export default CartContext