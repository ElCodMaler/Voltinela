import React from 'react'
import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

const BannerAlMayor = () => {
  return (
    <>
        <br />
        <section>
            <div className='titulo container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Al mayor</h3>
            </div>
            <br />
            <div className='container mx-auto px-4' style={{width:'-webkit-fill-available'}}>
                <Link to={'/Voltinela'}>
                    <Card className="carta border-0 w-full py-12 bg-cover bg-center bg-[url('proyectos-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" style={{backgroundImage:"url('proyectos-solares.jpg')"}}>
                      <h5 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                        Compras al mayor
                      </h5>
                    </Card>
                </Link>
            </div>
        </section>
    </>
  )
}

export default BannerAlMayor