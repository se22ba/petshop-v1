import PRODUCTOS from './productos.json'

const demora = (ms) => new Promise((res) => setTimeout(res, ms))

export async function obtenerProductos(categoriaId) {
  await demora(500)
  return categoriaId ? PRODUCTOS.filter(p => p.categoria === categoriaId) : PRODUCTOS
}

export async function obtenerProductoPorId(id) {
  await demora(500)
  return PRODUCTOS.find(p => p.id === id)
}

export const CATEGORIAS = Array.from(new Set(PRODUCTOS.map(p => p.categoria))).map(id => ({
  id,
  nombre: id.charAt(0).toUpperCase() + id.slice(1)
}))