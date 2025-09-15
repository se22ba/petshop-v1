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
       <div className="card-acciones">
 <div className="qty">
  <input
    className="qty__input"
    type="number"
    min={1}
    defaultValue={1}
    aria-label={`Cantidad para ${titulo}`}
  />
  <button className="btn btn--ghost" disabled>Agregar</button>
</div>

  <Link to={`/item/${id}`} className="btn btn--primary">
    Ver detalle
  </Link>
</div>
       
    </article>
  )
}

export default Item