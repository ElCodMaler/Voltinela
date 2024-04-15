import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import datos from './dataBase/datos.json'
import Header from './layout/Header'
import FooterE from './layout/FooterE'
import Products from './pages/Products'
import Descripcion from './pages/Descripcion'
import Carrito from './pages/Carrito'
import Detal from './pages/Detal'
import Distribuidor from './pages/Distribuidor'
import InvitarGanar from './pages/InvitarGanar'
import Embajadores from './pages/Embajadores'
import Instala from './pages/Instala'
import Carreras from './pages/Carreras'
import AboutUs from './pages/AboutUs'

function App() {

  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')));

  const productos = Object.keys(datos).map( (producto) => datos[producto] )

  return (
    <>
      <BrowserRouter>

        <Header carrito={carrito} />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Productos' element={<Products />} />
          <Route path="/descripcion/:id" element={<Descripcion />} />
          <Route path='/Nosotros' element={<AboutUs />} />

        </Routes>

        <FooterE />

      </BrowserRouter>
    </>
  )
}

export default App
