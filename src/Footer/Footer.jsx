import React from 'react'
import s from './Footer.module.css'
import { Link } from "react-router-dom";
import CottageIcon from '@mui/icons-material/Cottage';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Footer() {
  return (
    <div className = {s.footer}>
        
          
        
        <Link to={"/"} style={{textDecoration:"none"}} className={s.link} ><CottageIcon />Inicio</Link>
        <Link to={"/"} className={s.link} style={{textDecoration:"none"}}> <p >Tecno<span>AR</span></p></Link>
        <Link to={"/cart"} style={{textDecoration:"none"}} className={s.link}><ShoppingCartIcon />Carrito</Link>
      
    </div>
  )
}

export default Footer