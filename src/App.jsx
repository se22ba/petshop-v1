import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import Index from './components/index'
import Productos from './components/Productos'           
import DetalleProducto from './components/DetalleProducto' 
import NotFound from './components/404'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tienda" element={<Productos />} />       
        <Route path="/categoria/:categoriaId" element={<Productos />} />
        <Route path="/item/:id" element={<DetalleProducto />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <Footer />
    </>
  )
}

export default App