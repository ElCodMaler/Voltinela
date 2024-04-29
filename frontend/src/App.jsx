import { useState } from 'react'
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
import infoES from './dataBase/infoES.json'
import infoEN from './dataBase/infoEN.json'
import datos from './dataBase/datos.json'
import data from './dataBase/data.json'
import useCarrito from './util/useCarrito'

function App() {
  //console.log(window.devicePixelRatio);

  const iES = infoES;
  const iEN = infoEN;

  const ES = Object.keys(datos).map((producto) => datos[producto]);
  const EN = Object.keys(data).map((producto) => data[producto]);

  const [ info, setInfo ] = useState(iES);
  const [ productos, setProductos ] = useState(ES);

  const handleLenguageEN = () => {
    setInfo(iEN);
    setProductos(EN);
  };

  const handleLenguageES = () => {
    setInfo(iES);
    setProductos(ES);
  };

  const { productosCarrito , guardarProducto, eliminarProducto } = useCarrito();

  return (
    <>
      <HashRouter basename='/'>

        <Header info={info} carrito={productosCarrito} productos={productos} handleLenguageEN={handleLenguageEN} handleLenguageES={handleLenguageES} />

        <Routes>
            <Route path='*' element={<Home info={info} />} />
            <Route path='/' element={<Home info={info} productos={productos} />} />
            <Route path='/Productos/:categorias' element={<Products info={info} productos={productos} carrito={productosCarrito} setCarrito={guardarProducto} />} />
            <Route path='/descripcion/:categorias/:id' element={<Descripcion info={info} productos={productos} carrito={productosCarrito} setCarrito={guardarProducto}/>} />
            <Route path='/Carrito' element={<Carrito info={info} carrito={productosCarrito} removeProduct={eliminarProducto}/>} />
            <Route path='/Detal' element={<Detal info={info} />} />
            <Route path='/Distribuidor' element={<Distribuidor info={info} />} />
            <Route path='/InvitaYGana' element={<InvitarGanar info={info} />} />
            <Route path='/Embajadores' element={<Embajadores info={info} />} />
            <Route path='/Instala+' element={<Instala info={info} />} />
            <Route path='/Carreras' element={<Carreras info={info} />} />
            <Route path='/Nosotros' element={<AboutUs info={info} />} />
        </Routes>

        <FooterE info={info} productos={productos} />

      </HashRouter>
    </>
  )
}

export default App
