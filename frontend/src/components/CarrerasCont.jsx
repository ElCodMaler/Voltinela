import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FormularioCar from './FormularioCar'

function CarrerasCont({info}) {
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
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>{info.carreras}</h3>
          </div>
          <div className='sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-36 bg-white'>
            <div className='container mx-auto px-4 py-5'>
              <h2 className='text-lg font-semibold lg:text-3xl'>{info.tituloCarreras}</h2>
              <br />
              <p className='lg:text-xl'>{info.texto1Carreras}</p>
              <br />
              <p className='lg:text-xl'>{info.texto2Carreras}</p>
            </div>
            <FormularioCar info={info} />
            <br />
          </div>
          <br />
        </section>
        <br />
    </>
  )
}

export default CarrerasCont