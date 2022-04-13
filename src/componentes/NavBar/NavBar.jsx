import React from "react";
import './NavVar.css'
import CardWidget from "../CardWidget/CardWidget";
import * as ReactBootstrap from "react-bootstrap"
import { Link } from "react-router-dom";


export default function NabVar(){
    return(
       <nav>
         
           <ReactBootstrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="#home" className="titulo">
        
                    <Link to={"/"}><h1>Tecno<span>AR</span></h1></Link>
                 </ReactBootstrap.Navbar.Brand>
      
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="me-auto">
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav className="menu">
                        <Link to={"/"} className="menu__item"> <li >Inicio</li> </Link>
                        <Link to={"/category/Celular"} className="menu__item"> <li >Celulares</li> </Link>
                        <Link to={"/category/Notebooks"} className="menu__item"> <li >Notebooks</li> </Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
                <CardWidget/>
            </ReactBootstrap.Navbar>

       </nav>
    
    );}