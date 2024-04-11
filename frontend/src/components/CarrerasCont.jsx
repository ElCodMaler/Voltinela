import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FormularioCar from './FormularioCar'

function CarrerasCont() {
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <section id='embajadores' className='bg-white lg:mt-12'>
          <br />
          <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
              <Link className='flex p-3' to={'/'}>
                  <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}} />
              </Link>
          </div>
          <br />
          <div className='titulo container mx-auto w-max lg:py-10'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Carreras</h3>
          </div>
          <div className='bg-white'>
            <div className='container mx-auto px-4 py-5'>
              <h2 className='text-lg font-semibold lg:text-3xl'>Desarrolla tu Talento en Voltinela: Un Futuro Lleno de Oportunidades Te Espera</h2>
              <br />
              <p className='lg:text-xl'>
                  En Voltinela, creemos que el talento es la clave para construir un futuro más sostenible. 
                  Si tu pasión es marcar la diferencia y tu visión está alineada con la energía renovable, 
                  te invitamos a explorar las oportunidades de carrera con nosotros. Desde roles en ventas y 
                  marketing hasta ingeniería y más allá, buscamos incorporar a personas motivadas en nuestro equipo. 
                  Descubre las posibilidades que Voltinela ofrece para tu desarrollo profesional y sé parte de la solución 
                  hacia un mundo más verde.
              </p>
              <br />
              <p className='lg:text-xl'>
                  Inicia tu viaje con nosotros. Si estás buscando una carrera con propósito, completa nuestro formulario de 
                  oportunidades de carrera. Estamos emocionados por conocer el talento que puedes aportar a nuestro equipo.
              </p>
            </div>
            <FormularioCar />
            <br />
          </div>
          <br />
        </section>
        <br />
    </>
  )
}

export default CarrerasCont