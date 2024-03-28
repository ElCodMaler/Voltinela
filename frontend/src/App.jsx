import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import Header from './layout/Header'
import FooterE from './layout/FooterE'
import Products from './pages/Products'
import Descripcion from './pages/Descripcion'
import AboutUs from './pages/AboutUs'

function App() {

  const { id } = useParams();

  return (
    <>
      <BrowserRouter>

        <Header />

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
