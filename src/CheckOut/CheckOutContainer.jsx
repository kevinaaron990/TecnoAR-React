import React, {useContext, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Context } from '../componentes/CartContext';
import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";

function CheckOutContainer() {

    
    const[emailRequired, setEmailRequired] = useState("");
    const[phoneRequired, setPhoneRequired] = useState(0);
    const handleEmailRequired = (e) => {setEmailRequired(e.target.value)}
    const handleCellphoneRequired = (e) => {setPhoneRequired(e.target.value)}


    const {cart, buy} = useContext(Context);
    const [buyer, setBuyer] = useState({
        name: "",
        lastName: "",
        phone: "",
        email: ""
    });

    const [checkoutId, setCheckoutId] = useState("");

    const handleOnChange = (e) => {
        setBuyer({
            ...buyer,
            [e.target.name]: e.target.value
        })
    }

    const sendOrder = () => {
        if(emailRequired === ""){console.log("Campo Requerido");}
        else if(phoneRequired === 0){console.log("Campo Requerido");}else{
        let orderDate = serverTimestamp();
        const orden = {
            buyer: buyer,
            items: cart,
            date: orderDate
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "ordenes");
        addDoc(ordersCollection, orden).then(({id})=> setCheckoutId(id));
        buy();
        }
    }


  return (
    <>
        
        { checkoutId === "" && <>
        <h2>Complete sus Datos </h2>
        <Form>
        <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control name='name' type="text" placeholder="Nombre" onChange={handleOnChange} required/>
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control name='lastName' type="text" placeholder="Apellido" onChange={handleOnChange} required/>
        </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control name='email' type="email" placeholder="Enter email" onChange={(e)=> {handleOnChange(e); handleEmailRequired(e)}} required/>
            <Form.Text className="text-muted">
                Campo obligatorio.
            </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3">
            <Form.Label>Numero de Telefono</Form.Label>
            <Form.Control name='phone' type="number" placeholder="Telefono" onChange={(e)=> {handleOnChange(e); handleCellphoneRequired(e)}} required/>
        </Form.Group></Form>
        </>}
        {checkoutId === "" ? <Button variant="dark" type='submit' onClick={() => sendOrder()}>Enviar</Button> :
        <h1 style={{ textAlign:'center',color:'black' }}>Gracias por su Compra Nos estaremos Contactando Contigo en la Brevedad</h1>}
    </>
  )
}

export default CheckOutContainer