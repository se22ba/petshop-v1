import React from 'react'

function Item({producto, descripcion, precio}) {
  return (
    <div>
        <h2>Producto {producto}</h2>
        <p>Descripcion del producto {descripcion}</p>
        <h3>Precio $ {precio}</h3>
    </div>

  )
}

export default Item