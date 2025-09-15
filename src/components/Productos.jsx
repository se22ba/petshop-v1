import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ListaProductos from './ListaProductos'
import { obtenerProductos } from '../assets/data/datosProductos'

function Productos() {
  const { categoriaId } = useParams()
  const [productos, setProductos] = useState([])
  const [cargado, setCargado] = useState(false)

  
useEffect(() => {
    let activo = true
    obtenerProductos(categoriaId)
      .then((datos) => { if (activo) setProductos(datos) })
      .finally(() => { if (activo) setCargado(true) })
    return () => { activo = false }
  }, [categoriaId])

  if (cargado && !productos.length) return <p>No hay productos en esta categoría.</p>

  return <ListaProductos productos={productos} />
}

export default Productos