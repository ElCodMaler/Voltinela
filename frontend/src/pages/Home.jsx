import React from 'react'
import ReactDOM from 'react-dom/client'
import BannerIni from '../components/BannerIni'
import Categorias from '../components/Categorias'
import Proyectos from '../components/Proyectos'
import Nosotros from '../components/Nosotros'
import BannerAlMayor from '../components/BannerAlMayor'

function Home() {
  return (
    <>

      <BannerIni />

      <Categorias />

      <BannerAlMayor />

      {/*<Proyectos />*/}

      <Nosotros />

    </>
  )
}

export default Home