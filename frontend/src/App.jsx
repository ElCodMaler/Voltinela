import ReactDOM from 'react-dom/client'
import './App.css'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import FooterE from './layout/FooterE'
import Products from './pages/Products'
import Descripcion from './pages/Descripcion'
import AboutUs from './pages/AboutUs'

function App() {
  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')));
  return (
    <>
      <BrowserRouter>

        <Header carrito={carrito} />

        <Routes>

          <Route path='*' element={<Home />} />
          <Route path='/Voltinela' element={<Home />} />
          <Route path='/Voltinela/Productos' element={<Products />} />
          <Route path="/Voltinela/descripcion/:id" element={<Descripcion />} />
          <Route path='/Voltinela/Nosotros' element={<AboutUs />} />

        </Routes>

        <FooterE />

      </BrowserRouter>
    </>
  )
}

export default App
