import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { obtenerProductoPorId } from '../assets/data/datosProductos'

function DetalleProducto() {
  const { id } = useParams()
  const [producto, setProducto] = useState(null)
  const [cargado, setCargado] = useState(false) 

  useEffect(() => {
    let activo = true
   
    obtenerProductoPorId(id)
      .then((data) => { if (activo) setProducto(data) })
      .finally(() => { if (activo) setCargado(true) }) 
    return () => { activo = false }
  }, [id])

  if (cargado && !producto) return <p>Producto no encontrado.</p>
  if (!producto) return null  

  return (
  <section>
    <h1>{producto.titulo}</h1>
    <img src={producto.imagen} alt={producto.titulo} />
    <p>{producto.descripcion}</p>
    <h3>$ {producto.precio}</h3>
    <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 12 }}>
      <label htmlFor="cantidad">Cantidad:</label>
      <input id="cantidad" type="number" min={1} defaultValue={1} style={{ width: 80 }} />
      <button>Agregar al carrito</button>
    </div>
    
  </section>
)
}

export default DetalleProducto

