import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import FooterE from './layout/FooterE'
import Products from './pages/Products'
import Descripcion from './pages/Descripcion'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/Voltinela' element={<Home />} />
          <Route path='/Voltinela/Productos' element={<Products />} />
          <Route path="/Voltinela/Descripcion/:id" element={<Descripcion />} />
          <Route path='/Voltinela/Nosotros' element={<AboutUs />} />

        </Routes>

        <FooterE />

      </BrowserRouter>
    </>
  )
}

export default App
