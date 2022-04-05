import React from "react";
import './NavVar.css'
import CardWidget from "../CardWidget/CardWidget";
import * as ReactBootstrap from "react-bootstrap"


export default function NabVar(){
    return(
       <nav>
         
           <ReactBootstrap.Navbar collapseOnSelect expand="xl" bg="dark" variant="dark">
                <ReactBootstrap.Container>
                <ReactBootstrap.Navbar.Brand href="#home" className="titulo">
        
                    <h1>Tecno<span>AR</span></h1>
                 </ReactBootstrap.Navbar.Brand>
      
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="me-auto">
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav className="menu">
                        <ReactBootstrap.Nav.Link href="#" className="menu__item">Inicio</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#" className="menu__item">Nosotros</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#" className="menu__item">Contacto</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
                </ReactBootstrap.Container>
                <CardWidget/>
            </ReactBootstrap.Navbar>

       </nav>
    
    );}