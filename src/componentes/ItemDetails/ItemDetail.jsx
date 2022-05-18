import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import s from './ItemDetail.module.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function ItemDetail({producto}) {
  
  //const [setCant] = useState(0);
  const [click, setClick] = useState(false);

  const addCart = (cantidad) =>{
   
    setClick(true)
   

  }
  const handleClick = () => {
    setClick(false)
  }
  return (
    <>
    <div className={s.ItemDetail}>
    <Container key={producto.id} >
        <Card className={s.ItemDetail} style={{ border: 'none',display:'grid',gridTemplateColumns:'1fr 1fr'}} >
          <Card.Img variant="top" src={producto.imagen} className={s.ItemDetail__img}/>
          <Card.Body className={s.ItemDetail__body}>
            <Card.Title className={s.ItemDetail__title}>{producto.title}</Card.Title>
            <Card.Text className={s.ItemDetail__descripcion}>{producto.description}</Card.Text>
            <Card.Text>Precio Al Contado $ <span className={s.ItemDetail__price}>{producto.price}</span> </Card.Text>
            {click ? 
            <div> <Link to={"/cart"}> <Button variant="dark" style={{ width: '10rem', margin:'2rem'}}> Ir al Carrito </Button> </Link><Link to={"/"}><Button style={{ width: '10rem'}} onClick={() => handleClick()} variant="dark">Seguir comprando</Button> </Link></div>
             : <ItemCount addCart={addCart} inicial={1} stock={producto.stock} producto={producto}/>}
            
          </Card.Body>
        </Card>
        </Container>
        </div>  
    </>
  );
};

export default ItemDetail