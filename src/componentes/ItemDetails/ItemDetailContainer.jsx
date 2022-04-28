import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore} from "firebase/firestore";
// import { promesaDetails } from '../utiliadades/promesas'





function ItemDetailContainer() {

 const [producto, setProducto] = useState({})
 const { id } = useParams();

 useEffect(() => {
  const db = getFirestore();
  const productos = doc(db, "productos", id);
  getDoc(productos).then((res) => {
    setProducto({id: res.id, ...res.data()});
  });
}, [id]);

  return (
    
      <>
        <div >
          <ItemDetail producto={producto}/>
        </div>
      </>
    
  )
}

export default ItemDetailContainer