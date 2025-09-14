import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../assets/data/api'

function ItemDetalleContenedor() {
  const { id } = useParams()
  const [cargando, setCargando] = useState(true)
  const [producto, setProducto] = useState(null)
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    let activo = true
    setCargando(true)
    obtenerProductoPorId(id)
      .then((data) => { if (activo) setProducto(data) })
      .finally(() => activo && setCargando(false))
    return () => { activo = false }
  }, [id])

  if (cargando) return <p>Cargando detalle...</p>
  if (!producto) return <p>Producto no encontrado.</p>

  return (
    <section>
      <h1>{producto.producto}</h1>
      <img src={producto.imagen} alt={producto.titulo} />
      <p>{producto.descripcion}</p>
      <h3>$ {producto.precio}</h3>

      <div style={{ marginTop: 12 }}>
        <label>
          Cantidad:&nbsp;
          <input
            type="number"
            min={1}
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
            style={{ width: 80 }}
          />
        </label>
      </div>
    </section>
  )
}

export default ItemDetalleContenedor