import React, { useEffect, useState } from "react";
import promesas from "../utiliadades/promesas";
import productos from "../utiliadades/productos";
import ItemList from "./ItemList";
import s from "./ItemListContainer.module.css"


export default function ItemListContainer(){
    const [items, setItems] = useState([]);

    useEffect(() =>{
        promesas(3000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])
    return(
        <div className={s.cardProductos}>
            <ItemList productos={items} />
        </div>
    )
}