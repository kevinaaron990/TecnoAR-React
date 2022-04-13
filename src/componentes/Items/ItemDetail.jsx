import React from 'react'
import { Card, Container } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';




function ItemDetail({producto}) {
  return (
    <>  <Container>
        <Card style={{ width: '40rem' }}>
          <Card.Img variant="top" src={producto.imagen}/>
          <Card.Body style={{}}>
            <Card.Title>{producto.title}</Card.Title>
            <Card.Text>{producto.description}</Card.Text>
            <Card.Text>Precio Al Contado $ {producto.price}</Card.Text>
            <ItemCount inicial={0} stock={5} />
            
          </Card.Body>
        </Card>
        </Container>
    </>
  );
};

export default ItemDetail