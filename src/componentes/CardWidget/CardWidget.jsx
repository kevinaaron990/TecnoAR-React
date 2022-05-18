import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Context } from '../CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';


export default function CardWidget(){

    const {totalCart} = useContext(Context);
    return(
        <>
        <Link to="../cart" style={{textDecoration:"none"}}>
        <IconButton  style={{color:"white"}}>
          <ShoppingCartIcon />{totalCart > 0 ? totalCart : null}
        </IconButton>
      </Link>
        </>
    )
}