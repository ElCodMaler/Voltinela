import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

const BannerAlMayor = () => {
  return (
    <>
      <br />
        <section>
            <div className='titulo container mx-auto w-max lg:py-8'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Mayorista</h3>
            </div>
            <br />
            <div className='container mx-auto px-4' style={{width:'-webkit-fill-available'}}>
                <Link to={'/'}>
                    <Card className="carta border-0 w-full py-12 bg-cover bg-center bg-[url('proyectos-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" style={{backgroundImage:"url('proyectos-solares.jpg')"}}>
                      <h5 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                        Compras al mayor
                      </h5>
                    </Card>
                </Link>
                <Link to={'/Voltinela/Distribuidor'}>
                  <Card id='Baterias' className="carta h-full border-0 bg-no-repeat bg-cover bg-center bg-[url('../../public/proyectos-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('proyectos-solares.jpg')"}}>
                    <h5 id='Baterias' className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
                      Distribuidor
                    </h5>
                  </Card>
                </Link>
              </div>
            </div>
        </section>
    </>
  )
}

export default BannerAlMayor