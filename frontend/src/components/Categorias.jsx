'use client';

import { Button, Card } from 'flowbite-react'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Categorias() {

  const navigate = useNavigate();

  function handleClick(e) {
    const id = e.target.id;
    console.log(id);
    localStorage.setItem('categoria', id);
    navigate('/Productos');
    //console.log(localStorage.getItem('categoria'));
    //window.location.reload();
    return false;
  };

  return (
    <>

        <section className='pt-5'>

            <div className='titulo container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>Categorias</h3>
            </div>

            <br />

            <div className='container mx-auto px-4' id='categorias' onClick={handleClick}>

              <Card id='Portable Power Station' className="carta w-full py-12 bg-cover bg-center bg-[url('respaldo-playa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo-playa.jpg')"}}>
                <h5 className="text-center text-2xl font-bold tracking-tight text-white">
                  Portable Power Station
                </h5>
              </Card>
              
              <br />

              <div className='grid gab-2 grid-cols-2 space-x-3'>

                  <Card id='Paneles solares' className="carta py-12 me-2 bg-no-repeat bg-cover bg-center bg-[url('paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-solares.jpg')"}}>
                    <h5 className="text-center text-xl font-bold tracking-tight text-white">
                      Paneles Solares Residenciales
                    </h5>
                  </Card>

                  <Card id='Categorias 3' className="carta py-12 bg-no-repeat bg-cover bg-center bg-[url('paneles-portatiles.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-portatiles.jpg')"}}>
                    <h5 className="text-center text-xl font-bold tracking-tight text-white">
                      Paneles Solares Portatiles
                    </h5>
                  </Card>

              </div>

              <br />
              
              <Card id='Categorias 4' className="carta w-full py-12 bg-cover bg-center bg-[url('respaldo-familia.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo-familia.jpg')"}}>
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