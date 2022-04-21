import React from "react";
import carrito from "./carrito.png"
import { Link } from "react-router-dom";


export default function CardWidget(){
    return(
        <>
        <div className="carrito">
            <Link to={"/cart"}><img src={ carrito } 
            alt="logo carrito" className="logoCarrito"
            /></Link> 
            <span className="logoCarrito__contador"></span>
        </div>
        </>
    )
}