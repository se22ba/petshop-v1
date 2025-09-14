import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Productos from './components/Productos'
import DetalleProducto from './components/DetalleProducto'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/categoria/:categoriaId" element={<Productos />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App