import React from 'react'
import Navbar from './Navbar'
import Checkout from './Checkout'

function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <div className="brand">
          <a href="/" className="brand__link" aria-label="Ir al inicio">
            <img className="brand__logo" src="/images/logo.png" alt="Belleza con Patitas" />
            <span className="brand__name">Belleza con Patitas</span>
          </a>
        </div>

        <Navbar />
        <Checkout />
      </div>
    </header>
  )
}

export default Header