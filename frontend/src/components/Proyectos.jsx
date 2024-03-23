'use client';

import { Card } from 'flowbite-react';
import React from 'react'

function Proyectos() {
  return (
    <>
        <section className='pt-5'>

            <div className='titulo container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>
                    Proyectos
                </h3>
            </div>

            <br />

            <div className='container mx-auto px-4' id='proyectos'>

                <Card className="w-full py-5 bg-cover bg-center bg-[url('proyectos-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('proyectos-solares.jpg')"}}>
                  <h5 className="text-center text-2xl font-bold tracking-tight text-white">
                    Proyectos Solares
                  </h5>
                </Card>

                <br />

                <div className='grid gab-2 grid-cols-2 space-x-3'>

                    <Card className="me-2 py-5 bg-no-repeat bg-cover bg-center bg-[url('paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-solares.jpg')"}}>
                      <h5 className="text-center text-xl font-bold tracking-tight text-white">
                        Proyectos Residenciales
                      </h5>
                    </Card>
                    <Card className="py-5 bg-no-repeat bg-cover bg-center bg-[url('servicio-tecnico.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('servicio-tecnico.jpg')"}}>
                      <h5 className="text-center text-xl font-bold tracking-tight text-white">
                        Proyectos Comerciales
                      </h5>
                    </Card>

                </div>

            </div>

        </section>
    </>
  )
}

export default Proyectos