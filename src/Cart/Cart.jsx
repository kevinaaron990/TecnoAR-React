import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, ListGroupItem,ListGroup, Container} from 'react-bootstrap';
import s from './Cart.module.css';

function Cart({cart, clear, buy, removeItem}) {
  return (
    <>
       <Container className={s.carts}>  

      {cart.length > 0 &&
            cart.map((producto) => (
                          
      <Card style={{ width: '30rem' }} >
        <Card.Img variant="top" src={producto.imagen} style={{ height: '25rem'}} className={s.carts}/>
      <Card.Body >
        <Card.Title>DETALLES DEL PEDIDO</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Producto: {producto.title}</ListGroupItem>
        <ListGroupItem>Cantidad: {producto.cantidad}</ListGroupItem>
        <ListGroupItem>Precio: ${producto.price}</ListGroupItem>
        <ListGroupItem>TOTAL: ${parseInt(producto.price) * parseInt(producto.cantidad)}</ListGroupItem>
      </ListGroup>
      <Card.Body >
          <Link to='/'><Button variant="dark" >Volver Al Catalogo</Button></Link>
          {cart.length === 0?
          <Button style={{ margin:'0 1rem' }} variant="dark" onClick={buy}>Finalizar Compra</Button> :
          <Link to={"/checkOut"} style={{textDecoration:"none"}}><Button variant="dark">Finalizar Compra</Button></Link>}
          <Button variant="dark" onClick={() =>{ removeItem(producto.id)}}>Borrar item </Button>
       </Card.Body>
      </Card>   
))}  
    </Container>
        
  </>
  )
}

export default Cart