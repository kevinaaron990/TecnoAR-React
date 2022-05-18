import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";

import {getProducts , getProductsCategory} from "../utiliadades/ProductosFB"

export default function ItemListContainer(){

   const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()

    
    useEffect(()=>{
        if (id) {
            setLoading(true)
          getProductsCategory(id)
          .then((res) => {
            if (res.size === 0) {
              console.log("No se encontraron resultados");
            } else {
              // mapeamos los resultados
              console.log(res.data);
              setItems(
                res.docs.map((item) => ({ id: item.id, ...item.data() }))
              );
            }
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false)
           });
        }
      else {
        getProducts()
          .then((res) =>  
            {setItems(
              res.docs.map((item) => ({ id: item.id, ...item.data() }))
          );
          })
          .catch((err) => {console.log(err);
          })
          .finally(() => {
                 setLoading(false)
                });
        }
      }, [id]);
    return(
        <>
        {loading ? (<h1 className={s.loading}>Cargando Productos....</h1>) : ( <div className={s.cardProductos}>
        <ItemList productos={items} />
        </div>)}
       
        </>
    )
}