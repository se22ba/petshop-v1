import React from 'react'
import { Link } from 'react-router-dom'
import { CATEGORIAS } from '../assets/data/datosProductos'

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/">Tienda</Link></li>
        {CATEGORIAS.map(cat => (
          <li key={cat.id} className="nav-item">
            <Link className="nav-link" to={`/categoria/${cat.id}`}>{cat.nombre}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar