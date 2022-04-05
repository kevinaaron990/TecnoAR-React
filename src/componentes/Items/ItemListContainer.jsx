import React, { useEffect, useState } from "react";
import promesas from "../utiliadades/promesas";
import productos from "../utiliadades/productos";
import ItemList from "./ItemList";


export default function ItemListContainer(){
    const [items, setItems] = useState([]);

    useEffect(() =>{
        promesas(3000, productos)
        .then(resultado => setItems(resultado))
        .catch(error => console.log(error));
    }, [items])
    return(
        <div>
            <ItemList productos={items}/>
        </div>
    )
}