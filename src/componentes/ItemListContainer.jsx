import React from "react";
import { Card, Button, Container } from "react-bootstrap";

export default function ItemListContainer(){
    return(
    <>  <Container>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://samsungar.vtexassets.com/arquivos/ids/178483-1200-auto?width=1200&height=auto&aspect=true" />
             <Card.Body>
            <Card.Title>Celular Galaxy S22 ULTRA</Card.Title>
            <Card.Text>
            Precio: $150000
            </Card.Text>
           <Button variant="dark">Agregar Al Carrito</Button>
            </Card.Body>
        </Card>
        </Container>
    </>
    )
}