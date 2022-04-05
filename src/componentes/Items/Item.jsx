
import React from 'react'
import { Card  } from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";
function Item({id,description,title,price,imagen}) {
  return (
            <Card key={id} style={{ width: '18rem'}} >
                <Card.Img variant="top" src={imagen}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>Categoria: {description}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <ItemCount stock={10}/>
                </Card.Body>
            </Card>
  )
}

export default Item