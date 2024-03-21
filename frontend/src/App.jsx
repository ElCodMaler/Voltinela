import ReactDOM from 'react-dom/client'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './layout/Header'
import FooterE from './layout/FooterE'
import Products from './pages/Products'

function App() {

  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/Productos' element={<Products />} />

        </Routes>

        <FooterE />

      </BrowserRouter>
    </>
  )
}

export default App
