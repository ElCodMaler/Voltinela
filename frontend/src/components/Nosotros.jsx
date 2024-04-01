'use client';

import { Button } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function Nosotros() {
  return (
    <>
      <br />
        <Link to={'/Voltinela/Nosotros'}>
        <section id='aboutUs'>
          <div className='titulo container mx-auto w-max shadow-xl'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>
                  Nosotros
              </h3>
          </div>
          <br />
          <div className="bg-cover bg-center bg-no-repeat bg-[url('teclado.jpg')] bg-gray-600 bg-blend-multiply" style={{backgroundImage:"url('teclado.jpg')"}}>
              <div className="px-4 mx-auto max-w-screen-xl text-center py-12 md:py-16 lg:py-24 xl:py-28">
                  <h2 className="mb-4 text-3xl font-bold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">¿Quienes somos?</h2>
                  <p className='mb-1 text-md font-semibold text-white lg:text-lg sm:px-16 lg:px-48'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi molestias eius ratione quas, obcaecati neque aperiam quaerat at.</p>
                  <div className="flex flex-wrap gap-3 justify-center pt-3">
                    <Button className='focus:ring-0' pill>Mision</Button>
                    <Button className='focus:ring-0' pill>Vision</Button>
                    <Button className='focus:ring-0' pill>Valores</Button>
                  </div>
              </div>
          </div>
        
        </section>
      </Link>

    </>
  )
}


export default Nosotros