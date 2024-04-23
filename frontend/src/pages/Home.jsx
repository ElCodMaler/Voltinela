import React from 'react'
import ReactDOM from 'react-dom/client'
import BannerIni from '../components/BannerIni'
import Categorias from '../components/Categorias'
import Proyectos from '../components/Proyectos'
import Nosotros from '../components/Nosotros'
import BannerAlMayor from '../components/BannerAlMayor'
import Siguenos from '../components/Siguenos'
import Programas from '../components/Programas'

function Home({info, productos}) {
  return (
    <>
      <main>
        <BannerIni />

        <Categorias info={info} productos={productos} />

        <BannerAlMayor info={info} />

        <Programas info={info} />

        <Siguenos info={info} />

        {/*<Proyectos />*/}

        <Nosotros info={info} />

      </main>
    </>
  )
}

export default Home