import { Button } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <>
      <br />
      <Link to={'/Voltinela/Nosotros'}>
        <section id='aboutUs'>
          <div className="bg-cover bg-center bg-no-repeat bg-[url('teclado.jpg')] bg-gray-600 bg-blend-multiply" style={{backgroundImage:"url('teclado.jpg')"}}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-12 md:py-16 lg:py-24 xl:py-28">
                  <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">¿Quienes somos?</h2>
                  <p className='mb-1 text-md font-semibold text-white lg:text-lg sm:px-16 lg:px-48'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias eius ratione quas, obcaecati neque aperiam quaerat at.</p>
                  <div className="flex flex-wrap gap-3 justify-center pt-3">
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold'>Misión</h6></Button>
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold'>Visión</h6></Button>
                  </div>
              </div>
          </div>
        </section>
      </Link>

    </>
  )
}


export default Nosotros