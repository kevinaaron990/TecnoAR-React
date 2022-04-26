import React, { useContext } from "react";
import carrito from "./carrito.png"
import { Link } from "react-router-dom";
import { Context } from '../CartContext';


export default function CardWidget(){

    const {cant} = useContext(Context);
    return(
        <>
        <div className="carrito">
            <Link to={"/cart"}><img src={ carrito } 
            alt="logo carrito" className="logoCarrito"
            /></Link> 
            <span className="logoCarrito__contador">{cant}</span>
        </div>
        </>
    )
}