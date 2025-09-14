import React from 'react'
import { Link } from 'react-router-dom'

function Item({ producto }) {
  if (!producto) return null

  const { id, titulo, descripcion, precio } = producto

  return (
    <article className="tarjeta-item">
      <h2>{titulo}</h2>
      <img src={producto.imagen} alt={producto.titulo} />
      <p>{descripcion}</p>
      <h3>$ {precio}</h3>
      <Link to={`/item/${id}`}>Ver detalle</Link>
    </article>
  )
}

export default Item