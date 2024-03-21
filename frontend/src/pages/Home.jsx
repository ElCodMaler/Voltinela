import React from 'react'
import ReactDOM from 'react-dom/client'
import BannerIni from '../components/BannerIni'
import Categorias from '../components/Categorias'
import Proyectos from '../components/Proyectos'
import Nosotros from '../components/Nosotros'

function Home() {
  return (
    <>

      <BannerIni />

      <Categorias />

      <Proyectos />

      <Nosotros />

    </>
  )
}

export default Home