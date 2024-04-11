import React from 'react'
import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

function Categorias() {

  const navigate = useNavigate();

  function handleClick(e) {
    const id = e.target.id;
    localStorage.setItem('categoria', id);
    navigate('/Voltinela/Productos');
    return false;
  };

  return (
    <>
      <section className='flex flex-col items-center w-full pt-5'>
        <div className='titulo container mx-auto w-max lg:py-8'>
           <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Categorias</h3>
        </div>
        <br />
        <div className='container mx-auto px-4' id='categorias' onClick={handleClick} style={{width:'-webkit-fill-available'}}>
          <Card id='Estación Portátil de Poder' className="carta w-full py-12 bg-cover bg-center bg-[url('../../public/respaldo-playa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96">
            <h5 id='Estación Portátil de Poder' className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
              Estación Portátil de Poder
            </h5>
          </Card>
          <br />
          <div className='grid gab-2 grid-cols-2 space-x-3 md:h-48 lg:h-72 xl:h-96'>
            <Card id='Paneles solares' className="carta py-12 me-2 bg-no-repeat bg-cover bg-center bg-[url('../../public/paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
              <h5 id='Paneles solares' className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
                Paneles Solares
              </h5>
            </Card>
            <Card id='Servicios' className="carta py-12 bg-no-repeat bg-cover bg-center bg-[url('../../public/paneles-portatiles.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
              <h5 id='Servicios' className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
                Servicios
              </h5>
            </Card>
          </div>
          <br />
          <Card id='Baterías / Inversores' className="carta w-full py-12 bg-cover bg-center bg-[url('../../public/respaldo-familia.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96">
            <h5 id='Baterías / Inversores' className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
              Baterías / Inversores
            </h5>
          </Card>
        </div>
      </section>
    </>
  )
}

export default Categorias