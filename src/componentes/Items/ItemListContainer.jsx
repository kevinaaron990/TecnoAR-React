import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css"
import { useParams } from "react-router-dom";
import { promesaItemList } from '../utiliadades/promesas'

export default function ItemListContainer(){

   const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([]);
    const { id } = useParams()

    // useEffect(() =>{
    //     promesaItemList(3000, productos)
    //     .then(resultado => setItems(resultado))
    //     .catch(error => console.log(error));
    // }, [id])
    useEffect(() => {
        setLoading(true)
        promesaItemList(id)
        .then((res) => setItems(res))
        .catch((error) => console.log(error))
        .finally(() => {
            setLoading(false)
        });
        }, [id]);
    return(
        <>
        {loading ? (<h1 className={s.loading}>Cargando Productos....</h1>) : ( <div className={s.cardProductos}><ItemList productos={items} /></div>)}
       
        </>
    )
}