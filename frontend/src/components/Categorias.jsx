'use client';

import { Card } from 'flowbite-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Categorias() {

  const navigate = useNavigate();

  function handleClick(e) {
    const id = e.target.id;
    console.log(id);
    localStorage.setItem('categoria', id);
    navigate('/Productos');
    //console.log(localStorage.getItem('categoria'));
    window.location.reload();
    return false;
  };

  return (
    <>

        <section className='flex flex-col items-center w-full pt-5'>

            <div className='titulo container mx-auto w-max shadow-xl'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Categorias</h3>
            </div>

            <br />

            <div className='container mx-auto px-4' id='categorias' onClick={handleClick} style={{width:'-webkit-fill-available'}}>

              <Card id='Portable Power Station' className="carta w-full py-12 bg-cover bg-center bg-[url('respaldo-playa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" style={{backgroundImage:"url('respaldo-playa.jpg')"}}>
                <h5 id='Portable Power Station' className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                  Estación portátil de poder
                </h5>
              </Card>
              
              <br />

              <div className='grid gab-2 grid-cols-2 space-x-3 md:h-48 lg:h-72 xl:h-96'>

                  <Card id='Paneles solares' className="carta py-12 me-2 bg-no-repeat bg-cover bg-center bg-[url('paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-solares.jpg')"}}>
                    <h5 id='Paneles solares' className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                      Paneles Solares
                    </h5>
                  </Card>

                  <Card id='Baterias' className="carta py-12 bg-no-repeat bg-cover bg-center bg-[url('paneles-portatiles.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('paneles-portatiles.jpg')"}}>
                    <h5 id='Baterias' className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                      Baterías
                    </h5>
                  </Card>

              </div>

              <br />
              
              <Card id='Servicios' className="carta w-full py-12 bg-cover bg-center bg-[url('respaldo-familia.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" style={{backgroundImage:"url('respaldo-familia.jpg')"}}>
                <h5 id='Servicios' className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                  Servicios
                </h5>
              </Card>

            </div>
            
        </section>

    </>
  )
}

export default Categorias