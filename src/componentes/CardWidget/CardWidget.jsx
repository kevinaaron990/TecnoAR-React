import React from "react";
import carrito from "./carrito.png"


export default function CardWidget(stock){
    return(
        <>
        <div className="carrito">
            <img src={ carrito } 
            alt="logo carrito" className="logoCarrito"
            />
            <span className="logoCarrito__contador"></span>
        </div>
        </>
    )
}