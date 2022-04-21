
import React, { useContext } from 'react';
import { Context } from '../componentes/CartContext';
import { Link } from 'react-router-dom';
import { Button, Card, ListGroupItem,ListGroup } from 'react-bootstrap';



function CartContainer() {

 

  const { cart, removeCart, buy } = useContext(Context);

  console.log(cart);

  return (
    <>
      {cart.length > 0 &&
            cart.map((producto) => (
      <Card style={{ width: '40rem' }}>
        <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
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
          <Button style={{ margin:'0 1rem' }} variant="dark" onClick={buy}>Finalizar Compra</Button>
          <Button variant="dark" onClick={() => removeCart(producto.id)}>Borrar Producto</Button>
       </Card.Body>
      </Card>
))}
    
  </>
  )};

export default CartContainer