import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom'
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
import datos from './dataBase/datos.json'

function App() {

  const productos = Object.keys(datos).map((producto) => datos[producto]);

  const [carrito, setCarrito] = useState([]);

  return (
    <>
      <HashRouter basename='/'>

        <Header carrito={carrito} />

        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/Productos' element={<Products productos={productos}/>} />
            <Route path='/descripcion/:id' element={<Descripcion carrito={carrito} setCarrito={setCarrito} productos={productos} />} />
            <Route path='/Carrito' element={<Carrito carrito={carrito} />} />
            <Route path='/Detal' element={<Detal />} />
            <Route path='/Distribuidor' element={<Distribuidor />} />
            <Route path='/InvitaYGana' element={<InvitarGanar />} />
            <Route path='/Embajadores' element={<Embajadores />} />
            <Route path='/Instala+' element={<Instala />} />
            <Route path='/Carreras' element={<Carreras />} />
            <Route path='/Nosotros' element={<AboutUs />} />
        </Routes>

        <FooterE />

      </HashRouter>
    </>
  )
}

export default App
