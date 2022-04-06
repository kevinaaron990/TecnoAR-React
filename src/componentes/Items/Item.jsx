
import React, {useState} from 'react'
import { Card  } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";

function Item(productos) {

  let [disponible , setDisponible] = useState(productos.stock)

  let onAdd = (num) =>{
      alert("agregaste " + num + " productos a tu carrito")
      disponible = setDisponible(productos.stock - num)
      }
  
    

  return (
            <Card key={productos.id} style={{ width: '18rem'}} >
                <Card.Img variant="top" src={productos.imagen}/>
                <Card.Body>
                    <Card.Title>{productos.title}</Card.Title>
                    <Card.Text>Categoria: {productos.description}</Card.Text>
                    <Card.Text>{productos.price}</Card.Text>
                    <Card.Text>{productos.stock}</Card.Text>
                    <ItemCount inicial={0} stock={5} onAdd={onAdd} existente={disponible}/>
                </Card.Body>
            </Card>
  )
}

export default Item