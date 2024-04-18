import React from 'react'
import { Card } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

function Categorias({productos}) {

  const navigate = useNavigate();

  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];

  const renderCategorias = () => {
    return (
      <>
        <div className='container mx-auto px-4' id='categorias' style={{width:'-webkit-fill-available'}}>
          <Card id={categorias[0]} className="carta w-full py-12 bg-cover bg-center bg-[url('/respaldo-playa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" onClick={() => handleSelectedCat(categorias[0])}>
            <h5 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
              {categorias[0]}
            </h5>
          </Card>
          <br />
          <div className='grid gab-2 grid-cols-2 space-x-3 md:h-48 lg:h-72 xl:h-96'>
            <Card id={categorias[1]} className="carta py-12 me-2 bg-no-repeat bg-cover bg-center bg-[url('/paneles-solares.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" onClick={() => handleSelectedCat(categorias[1])}>
              <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
                {categorias[1]}
              </h5>
            </Card>
            <Card id={categorias[2]} className="carta py-12 bg-no-repeat bg-cover bg-center bg-[url('/paneles-portatiles.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" onClick={() => handleSelectedCat(categorias[2])}>
              <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
              {categorias[2]}
              </h5>
            </Card>
          </div>
          <br />
          <Card id={categorias[3]} className="carta w-full py-12 bg-cover bg-center bg-[url('/respaldo-familia.jpg')] bg-gray-400 bg-blend-multiply shadow-xl md:h-48 lg:h-72 xl:h-96" onClick={() => handleSelectedCat(categorias[3])}>
            <h5 className="text-center text-2xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl">
              Baterías / Inversores
            </h5>
          </Card>
        </div>
      </>
    )
  };

  const handleSelectedCat = (categorias) => {
    navigate(`/Productos/${categorias}`);
};

  return (
    <>
      <section className='flex flex-col items-center w-full pt-5'>
        <div className='titulo container mx-auto w-max lg:py-8'>
           <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Categorias</h3>
        </div>
        <br />
        {renderCategorias()}
      </section>
    </>
  )
}

export default Categorias