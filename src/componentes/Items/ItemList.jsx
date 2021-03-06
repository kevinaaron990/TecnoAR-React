import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (
    productos.map(producto => (
        <Item 
        id={producto.id}
        title={producto.title}
        description={producto.description}
        price={producto.price}
        imagen={producto.imagen}
        key={producto.id}
        />
    ))
  )
}

export default ItemList