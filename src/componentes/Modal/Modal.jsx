import React, { useEffect, useState } from "react";
import s from "./Modal.module.css";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import ClearIcon from '@mui/icons-material/Clear';





function Modal({ setOpenModal, checkoutCode }) {

  
  const [itemCheckout, setItemCheckout] = useState([]);

  useEffect(() => {
    const dataBase = getFirestore();

    const products = doc(dataBase, 'pedidos', checkoutCode);

    getDoc(products)
    .then((res) => {
      setItemCheckout({ id: res.id, ...res.data() });
    }).catch((err) => {
      console.log("error: ", err);
    });

  }, [checkoutCode]);

  return (
    <div className={s.modalBackground}>
      <div className={s.modalContainer}>
        <div className={s.titleCloseBtn}>
          <Link to={"/"}>
            <Button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <ClearIcon/>
            </Button>
          </Link>
        </div> 
        <div className={s.title}>
            <h1>Gracias por su compra</h1>
        </div>
        <div className={s.body}>
            <h3>Resumen:</h3>
                {itemCheckout?.items?.map((item) =>{
                return <div className={s.itemList} key={item.id}>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Producto: {item.title}</p> 
                    <p>Precio: ${item.price}</p> 
                    <p>N°Orden: {checkoutCode}</p>
                   </div>
              })}

              <p>Total: ${itemCheckout?.total}</p>
            </div>

         
        
        <div className={s.footer}> 
        <Link style={{textDecoration:"none"}} to={"/"}>
          <Button variant="outlined" style={{color:"#d8d811"}}>Continuar</Button>
        </Link>
        </div>
      
    
        
      </div>
    </div>
  );
}
      
export default Modal;