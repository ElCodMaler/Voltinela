import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FormularioIns from '../components/FormularioIns'

function InstalaCont() {
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <section id='embajadores' className='bg-white lg:mt-12'>
          <br />
          <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
              <Link className='flex p-3' to={'/Voltinela/'}>
                  <AiOutlineArrowLeft style={{color:'white'}}/>
              </Link>
          </div>
          <br />
          <div className='titulo container mx-auto w-max lg:py-10'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Instala+</h3>
          </div>
          <div className='bg-white'>
            <div className='container mx-auto px-4 py-5'>
              <h2 className='text-lg font-semibold lg:text-3xl'>Programa Instala+: Eleva Tu Profesión, Conecta con el Futuro</h2>
              <br />
              <p className='lg:text-xl'>
                  Para ti, que eres instalador profesional y buscas llevar tu carrera al siguiente nivel con soluciones 
                  energéticas de vanguardia, nuestro programa Instala+ abre puertas. Formar parte de nuestra red de 
                  instaladores verificados significa acceso a formación avanzada, soporte exclusivo y una selección 
                  de productos líderes en el sector. Únete a Instala+ y conviértete en un referente de la instalación 
                  de soluciones de energía renovable, garantizando con tu trabajo la excelencia y la confianza que nuestros 
                  clientes esperan.
              </p>
              <br />
              <p className='lg:text-xl'>
                  Da el próximo paso. Si estás listo para elevar tu carrera, completa nuestro formulario para instaladores 
                  y únase a la red de profesionales que están moldeando el futuro de la energía renovable.
              </p>
            </div>
            <FormularioIns />
            <br />
          </div>
          <br />
        </section>
        <br />
    </>
  )
}

export default InstalaCont