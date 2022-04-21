
import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';


function Item(productos) {


  
    

  return (
        <Container >
            <Card  key={productos.id}style={{ width: '20rem'}}  >
                <Card.Img variant="buttom" src={productos.imagen} style={{ height: '20rem'}}/>
                <Card.Body >
                    <Card.Title style={{ fontSize: '1.8rem'}}>{productos.title}</Card.Title>
                    <Card.Text style={{ fontSize: '1.3rem'}}>$ {productos.price}</Card.Text>
                    <Card.Text>{productos.stock}</Card.Text>
                    <Card.Text>
                        <Link to={`/Item/${productos.id}`} style={{ textDecoration: 'none',textAlign:'center',fontWeight:'700'}}><p >Ver Detalles</p></Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
  )
}

export default Item