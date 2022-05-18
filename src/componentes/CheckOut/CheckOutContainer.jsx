import React, {useContext, useState} from 'react';
import Button from "react-bootstrap/Button";
import { Context } from '../CartContext';
import {addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";
import Modal from '../Modal/Modal';
import s from './CheckOut.module.css'
import { Form } from 'react-bootstrap';



function CheckOutContainer() {
    const {cart, buy, totalPrice} = useContext(Context);
    
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    

 //estado que guarda id de la compra
 const [checkoutCode, setCheckoutCode] = useState(" ");
  
 const order = {
   buyer: {name: name, lastName: lastName, phone: phone, email: email},
   items: cart,
   total: totalPrice,
   date: serverTimestamp()
 }

 //Petición a Firebase de id de aorden de compra
 const sendOrder = () => {
   const dataBase = getFirestore();
   const ordersCollection = collection(dataBase, "pedidos");

   addDoc(ordersCollection, order).then(({ id }) => {
     setCheckoutCode(id);
     buy();
     
   })
 }

 const [modalOpen, setModalOpen] = useState(false);


  return (
    
    <div className={s.formContainer}>
    <Form className={s.checkoutForm} onSubmit={(e) => { e.preventDefault(); sendOrder(); setModalOpen(true); }}>
    <h1 className={s.titleForm}>Complete Sus Datos</h1>
      <Form.Group className="mb-2">
      <Form.Label >Nombre</Form.Label>
        <Form.Control  type="text" name='name' value={name} onChange={(e) => { setName(e.currentTarget.value) }} required maxLength={100}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label >Apellido</Form.Label>
        <Form.Control  type="text" name='lastName' value={lastName} onChange={(e) => { setLastName(e.currentTarget.value) }} required maxLength={100}/>
      </Form.Group>
      <Form.Group className="mb-3">
      <Form.Label >Telefono</Form.Label>
        <Form.Control type="tel" name='phone' value={phone} onChange={(e) => { setPhone(e.currentTarget.value) }} required title="Solo utilice números" pattern="[0-9]{6,20}" maxLength={30}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label >Email</Form.Label>
        <Form.Control   type="email" name='email' value={email} onChange={(e) => { setEmail(e.currentTarget.value) }} required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="nombre@ejemplo.com" maxLength={200}/>
      </Form.Group>
     
      {cart.length === 0? 
        <Button variant="contained" disabled>Enviar</Button> :
        <Button type="submit" variant="contained">Enviar</Button>}
    </Form>
    
    {modalOpen && <Modal  setOpenModal={setModalOpen} checkoutCode={checkoutCode}/>}
</div>
        
         
        
    

  )
}

export default CheckOutContainer