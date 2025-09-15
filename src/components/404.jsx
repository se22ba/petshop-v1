import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="notfound-bg" style={{ backgroundImage:'url("/images/404.jpg")' }}>
      <h1 style={{fontSize:'64px',margin:0}}>404</h1>
      <p style={{margin:'8px 0 0'}}>Página no encontrada</p>
      <Link className="notfound-btn" to="/">Volver al inicio</Link>
    </div>
  )
}
export default NotFound