import { Button } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <>
      <br />
      <div className='titulo container mx-auto w-max lg:py-8'>
         <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Nosotros</h3>
      </div>
      <br />
      <Link to={'/Voltinela/Nosotros'}>
        <section id='aboutUs'>
          <div className="bg-cover bg-center bg-no-repeat bg-[url('teclado.jpg')] bg-gray-600 bg-blend-multiply" style={{backgroundImage:"url('teclado.jpg')"}}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-12 md:py-16 lg:py-24 lg:px-20 xl:py-28">
                  <h2 className="mb-4 text-2xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-5xl lg:pb-8">
                    ¿Quienes somos?
                  </h2>
                  <p className='mb-1 text-base font-semibold text-white sm:px-16 lg:text-4xl'>
                    Voltinela se enfoca en reforzar la seguridad energética y promover la autosuficiencia mediante 
                    soluciones de energía renovable.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-3 lg:pt-8">
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold lg:text-4xl'>Misión</h6></Button>
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold lg:text-4xl'>Visión</h6></Button>
                  </div>
              </div>
          </div>
        </section>
      </Link>

    </>
  )
}


export default Nosotros