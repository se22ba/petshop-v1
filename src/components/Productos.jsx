import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemLista from './ListaProductos'
import { obtenerProductos } from '../assets/data/datosProductos'

function Productos() {
  const { categoriaId } = useParams()
  const [cargando, setCargando] = useState(true)
  const [productos, setProductos] = useState([])

  useEffect(() => {
    let activo = true
    setCargando(true)
    obtenerProductos(categoriaId)
      .then((data) => { if (activo) setProductos(data) })
      .finally(() => activo && setCargando(false))
    return () => { activo = false }
  }, [categoriaId])

  if (cargando) return <p>Cargando catálogo...</p>
  if (!productos.length) return <p>No hay productos en esta categoría.</p>

  return <Productos productos={productos} />
}

export default Productos