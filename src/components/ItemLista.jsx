import React from 'react'
import Item from './Item'

function ItemLista({ productos }) {
  return (
    <div className="items">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ItemLista