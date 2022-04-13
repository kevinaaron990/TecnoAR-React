import React, { useEffect, useState } from "react";

import productos from "../utiliadades/productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";


export default function ItemListContainer(){

    const { id } = useParams()
    const [items, setItems] = useState([]);

    // useEffect(() =>{
    //     promesaItemList(3000, productos)
    //     .then(resultado => setItems(resultado))
    //     .catch(error => console.log(error));
    // }, [id])
    useEffect(() => {

    
    const promesaCategory = new Promise((res, rej) =>{
        setTimeout(() =>{
            if(id){
                res(productos.filter(item => item.category === id));
            }else{
                res(productos)
            }
        },2000)
    })
    promesaCategory.then((res) => {
        setItems(res)
    })
},[id])
    return(
        <>
        <div className={s.cardProductos}>
            <ItemList productos={items} />
        </div>
        </>
    )
}