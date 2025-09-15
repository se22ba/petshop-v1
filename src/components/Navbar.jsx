import React from 'react'
import { NavLink } from 'react-router-dom'

const base = 'nav-pill'
const activa = ({ isActive }) => (isActive ? `${base} nav-pill--activa` : base)

function Navbar() {
  return (
    <nav className="navbar-wrap">
      <ul className="navbar-list">
        <li><NavLink className={activa} to="/">Inicio</NavLink></li>
        <li><NavLink className={activa} to="/tienda">Tienda</NavLink></li>
        <li><NavLink className={activa} to="/categoria/juguetes">Juguetes</NavLink></li>
        <li><NavLink className={activa} to="/categoria/higiene">Higiene</NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar