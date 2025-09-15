import React from 'react'
import { Link } from 'react-router-dom'

function Checkout() {
  return (
    <Link to="/tienda" className="cart-btn" aria-label="Ir al carrito">
      <img src="/images/cart.png" alt="" className="cart-btn__icon" />
    </Link>
  )
}

export default Checkout