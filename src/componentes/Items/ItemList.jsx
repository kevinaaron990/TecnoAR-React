import React from 'react'
import Item from './Item'

function ItemList({productos}) {
  return (
    productos.map(producto => (
        <Item 
        key={producto.id}
        title={producto.title}
        description={producto.description}
        price={producto.price}
        imagen={producto.imagen}
        />
    ))
  )
}

export default ItemList