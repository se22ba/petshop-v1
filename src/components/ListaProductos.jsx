import React from 'react'
import Item from './Item'

function ListaProductos({ productos }) {
  return (
    <div className="items">
      {productos.map((prod) => (
        <Item key={prod.id} producto={prod} />
      ))}
    </div>
  )
}

export default ListaProductos