import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import ItemListaContenedor from './components/ItemListaContenedor'
import ItemDetalleContenedor from './components/ItemDetalleContenedor'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListaContenedor />} />
        <Route path="/categoria/:categoriaId" element={<ItemListaContenedor />} />
        <Route path="/item/:id" element={<ItemDetalleContenedor />} />
        <Route path="*" element={<p>Página no encontrada</p>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App