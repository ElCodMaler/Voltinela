'use client';

import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import datos from '../dataBase/datos.json';

function Listado() {

  return (
    <>
        <section className='py-4' style={{marginTop:'60px'}}>

            <div className='container py-4 mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>
                    Productos
                </h3>
            </div>

            <div className='container mx-auto px-4'>

                <div className='flex flex-wrap justify-center grid grid-cols-2'>

                    {Object.keys(datos).map((producto) => {
                        const { titulo, descripcion } = datos[producto];
                        return (
                            <Card href="#" className="m-2 py-5 bg-cover bg-center shadow-xl" key={producto}>
                                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {titulo}
                                </h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {descripcion}
                                </p>
                            </Card>
                    )})}

                </div>

            </div>

        </section>

        <br />
    </>
  )
}

export default Listado