
import React from 'react'
import { Link } from 'react-router-dom'

export default function Inicio() {
  return (
    <section className="hero">
      <div className="hero__content container">
        <h1 className="hero__title">Belleza con Patitas</h1>
        <p className="hero__subtitle">
          Mimos, juguetes y confort para tus peludos. Explorá la tienda o navegá por categorías.
        </p>

        <div className="hero__cta">
          <Link to="/tienda" className="btn-primario">Ver tienda</Link>
        </div>
        <ul className="hero__bullets">
          <li>Ofertas semanales en juguetes</li>
          <li>Higiene y cuidados suaves</li>
          <li>Camas y descanso premium</li>
        </ul>
      </div>
    </section>
  )
}