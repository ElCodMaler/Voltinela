'use client';

import { Button, Card } from 'flowbite-react';
import React from 'react'

function Categorias() {
  return (
    <>

        <section className='pt-5'>

            <div className='container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>Categorias</h3>
            </div>

            <br />

            <div className='container mx-auto px-4' id='categorias'>

              <Card className="w-full py-5 bg-cover bg-center bg-[url('respaldo-playa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo-playa.jpg')"}}>
                <h5 className="text-center text-2xl font-bold tracking-tight text-white">
                  Portable Power Station
                </h5>
                {/*<Button>
                  Read more
                  <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  </Button>*/}
              </Card>
              <br />
              <div className='grid gab-2 grid-cols-2 space-x-3'>
                  <Card className="me-2 py-5 bg-no-repeat bg-cover bg-center bg-[url('paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-solares.jpg')"}}>
                    <h5 className="text-center text-xl font-bold tracking-tight text-white">
                      Paneles Solares
                    </h5>
                  </Card>
                  <Card className="py-5 bg-no-repeat bg-cover bg-center bg-[url('respaldo.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo.jpg')"}}>
                    <h5 className="text-center text-xl font-bold tracking-tight text-white">
                      Categorias 3
                    </h5>
                  </Card>
              </div>
              <br />
              <Card className="w-full py-5 bg-cover bg-center bg-[url('respaldo-familia.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo-familia.jpg')"}}>
                <h5 className="text-center text-2xl font-bold tracking-tight text-white">
                  Categorias 4
                </h5>
              </Card>

            </div>
            
        </section>

    </>
  )
}

export default Categorias