import React from "react";
import carrito from "../componentes/carrito.png"


export default function CardWidget(){
    return(
        <>
        <div className="carrito">
            <img src={ carrito } 
            alt="logo carrito" className="logoCarrito"
            />
            <span className="logoCarrito__contador">1</span>
        </div>
        </>
    )
}