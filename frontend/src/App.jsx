import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import BotonCarrito from './components/BotonCarrito'

function App() {

  const [carrito, setCarrito] = useState(JSON.parse(localStorage.getItem('carrito')));

  return (
    <>
      <BrowserRouter>

        <Header carrito={carrito} />

        <Routes>

          <Route path='*' element={<Home />} />
          <Route path='/Voltinela/' element={<Home />} />
          <Route path='/Voltinela/Productos' element={<Products />} />
          <Route path="/Voltinela/descripcion/:id" element={<Descripcion carrito={carrito} setCarrito={setCarrito} />} />
          <Route path='/Voltinela/Carrito' element={<Carrito />} />
          <Route path='/Voltinela/Detal' element={<Detal />} />
          <Route path='/Voltinela/Distribuidor' element={<Distribuidor />} />
          <Route path='/Voltinela/InvitaYGana' element={<InvitarGanar />} />
          <Route path='/Voltinela/Embajadores' element={<Embajadores />} />
          <Route path='/Voltinela/Instala+' element={<Instala />} />
          <Route path='/Voltinela/Carreras' element={<Carreras />} />
          <Route path='/Voltinela/Nosotros' element={<AboutUs />} />

        </Routes>

        <BotonCarrito />

        <FooterE />

      </BrowserRouter>
    </>
  )
}

export default App
