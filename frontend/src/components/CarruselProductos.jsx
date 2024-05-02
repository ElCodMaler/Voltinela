import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from "flowbite-react"
//import datos from '../dataBase/datos.json'

//const productos = Object.keys(datos).map((producto) => datos[producto]);

function CarruselProductos({productos}) {

  const { id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === id);
    
  const imagenesProducto = productoSeleccionado.imagenes;

  const renderImagenesProductos = () => {
    return imagenesProducto.map((imagenProducto, index) => (
        /*<div key={index}>
          <img src={imagenProducto} alt={imagenProducto.titulo} />
        </div>*/
        <div key={index} className="hidden duration-700 ease-in-out" data-carousel-item>
          <img src={`/${imagenProducto}`} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`/${imagenProducto}`}/>
        </div>
    ));
  };

  const renderBotonesProductos = () => {
    let slideIndex = 0;
  
    return imagenesProducto.map((imagenProducto, index) => {
      return (
        <button key={index} type="button" className="w-12 h-12 bg-transparent sm:w-[5.4rem] lg:w-[3.8rem] xl:w-[4.5rem] 2xl:w-20 sm:h-[5.4rem] lg:h-[3.8rem] xl:h-[4.5rem] 2xl:h-20" aria-current="true" aria-label={`Slide ${index + 1}`} data-carousel-slide-to={slideIndex++}>
          <img className="w-full h-full object-cover rounded-lg" src={`/${imagenProducto}`} alt={`/${imagenProducto}`} />
        </button>
      );
    });
  };

  useEffect(() => {
    renderImagenesProductos();
  });

  return (
    <>
      {/*<Carousel>
          {renderImagenesProductos()}
      </Carousel>*/}

      <div id="default-carousel" className="relative w-full h-full z-0" data-carousel="slide">
        <div className="relative h-full overflow-hidden rounded-lg">
            {renderImagenesProductos()}
        </div>
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {renderBotonesProductos()}
        </div>
        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#81cc00]/30 group-hover:bg-[#81cc00]/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                </svg>
                <span className="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#81cc00]/30 group-hover:bg-[#81cc00]/50 group-focus:ring-0 group-focus:ring-white group-focus:outline-none">
                <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span className="sr-only">Next</span>
            </span>
        </button>
      </div>

    </>
  )
}

export default CarruselProductos