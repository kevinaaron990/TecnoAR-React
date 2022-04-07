
import React, {useState} from 'react'
import { Card, Container } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";


function Item(productos) {

  let [disponible , setDisponible] = useState(productos.stock)

  let onAdd = (num) =>{
      alert("agregaste " + num + " productos a tu carrito")
      disponible = setDisponible(productos.stock - num)
      }
  
    

  return (
        <Container >
            <Card key={productos.id} style={{ width: '20rem'}}  >
                <Card.Img variant="buttom" src={productos.imagen} style={{ height: '20rem'}}/>
                <Card.Body >
                    <Card.Title>{productos.title}</Card.Title>
                    <Card.Text>Categoria: {productos.description}</Card.Text>
                    <Card.Text>$ {productos.price}</Card.Text>
                    <Card.Text>{productos.stock}</Card.Text>
                    <ItemCount inicial={0} stock={5} onAdd={onAdd} existente={disponible}/>
                </Card.Body>
            </Card>
        </Container>
  )
}

export default Item