import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import s from './ItemDetail.module.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';




function ItemDetail({producto}) {
  
  const [cant, setCant] = useState(0);
  const [click, setClick] = useState(false);

  const addCart = (cantidad) =>{
    setCant(cantidad);
    setClick(true)
   

  }
  const handleClick = () => {
    setClick(false)
  }
  return (
    <>  <Container key={producto.id} className={s.ItemDetail}>
        <Card style={{ width: '80rem' ,border: 'none',display:'grid',gridTemplateColumns:'1fr 1fr'}} >
          <Card.Img variant="top" src={producto.imagen} className={s.ItemDetail__img}/>
          <Card.Body className={s.ItemDetail__body}>
            <Card.Title className={s.ItemDetail__title}>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <Card.Text>Precio Al Contado $ <span className={s.ItemDetail__price}>{producto.price}</span> </Card.Text>
            {click ? 
            <div> <Link to={"/cart"}> <Button variant="dark" style={{ width: '10rem', margin:'2rem'}}> Ir al Carrito </Button> </Link><Button style={{ width: '10rem'}} onClick={() => handleClick()} variant="dark">Seguir comprando</Button> </div>
             : <ItemCount addCart={addCart} inicial={1} stock={producto.stock} producto={producto}/>}
            
          </Card.Body>
        </Card>
        </Container>
    </>
  );
};

export default ItemDetail