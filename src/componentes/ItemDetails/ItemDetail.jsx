import React from 'react'
import { Card, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import s from './ItemDetail.module.css'




function ItemDetail({producto}) {
  return (
    <>  <Container className={s.ItemDetail}>
        <Card style={{ width: '80rem' ,border: 'none',display:'grid',gridTemplateColumns:'1fr 1fr'}} >
          <Card.Img variant="top" src={producto.imagen} className={s.ItemDetail__img}/>
          <Card.Body className={s.ItemDetail__body}>
            <Card.Title className={s.ItemDetail__title}>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <Card.Text>Precio Al Contado $ <span className={s.ItemDetail__price}>{producto.price}</span> </Card.Text>
            <ItemCount inicial={0} stock={5} />
            
          </Card.Body>
        </Card>
        </Container>
    </>
  );
};

export default ItemDetail