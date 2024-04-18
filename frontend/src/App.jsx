import './App.css'
import Home from './pages/Home'
import { HashRouter, Routes, Route } from 'react-router-dom'
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
import useCarrito from './util/useCarrito'

function App() {

  const productos = Object.keys(datos).map((producto) => datos[producto]);

  const { productosCarrito , guardarProducto, eliminarProducto } = useCarrito();

  return (
    <>
      <HashRouter basename='/'>

        <Header carrito={productosCarrito} productos={productos} />

        <Routes>
            <Route path='*' element={<Home />} />
            <Route path='/' element={<Home productos={productos} />} />
            <Route path='/Productos/:categorias' element={<Products productos={productos} />} />
            <Route path='/descripcion/:categorias/:id' element={<Descripcion carrito={productosCarrito} setCarrito={guardarProducto} productos={productos} />} />
            <Route path='/Carrito' element={<Carrito carrito={productosCarrito} />} />
            <Route path='/Detal' element={<Detal />} />
            <Route path='/Distribuidor' element={<Distribuidor />} />
            <Route path='/InvitaYGana' element={<InvitarGanar />} />
            <Route path='/Embajadores' element={<Embajadores />} />
            <Route path='/Instala+' element={<Instala />} />
            <Route path='/Carreras' element={<Carreras />} />
            <Route path='/Nosotros' element={<AboutUs />} />
        </Routes>

        <FooterE productos={productos} />

      </HashRouter>
    </>
  )
}

export default App
