import React from 'react'
import FormularioDist from './FormularioDist'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

function DistribuidorTextForm() {
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <section className='bg-white lg:mt-12'>
            <br />
            <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
                <Link className='flex p-3' to={'/Voltinela/'}>
                    <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}} />
                </Link>
            </div>
            <div className='titulo container mx-auto w-max lg:py-10'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Distribuidor</h3>
            </div>
            <br />
            <div className='lg:py-10'>
                <div className='container mx-auto px-5 lg:px-12'>
                    <br />
                    <h3 className='font-medium lg:text-xl'>Para Potenciales Distribuidores</h3>
                    <br />
                    <p className='lg:text-xl'>Conviértete en Distribuidor de Voltinela y Abre Camino a un Futuro Sostenible</p>
                    <br />
                    <p className='lg:text-xl'>En Voltinela, lideramos la transformación hacia un futuro energético más sostenible y autosuficiente. 
                        Nos especializamos en ofrecer soluciones energéticas de alta calidad que incluyen sistemas de 
                        almacenamiento de energía, estaciones portátiles de poder, paneles solares, y mucho mas, haciendo la energía 
                        renovable accesible para todos.
                    </p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>¿Por qué unirte a nuestra red de distribución?</h3>
                    <br />
                    <ul className='container mx-auto px-10 text-sm font-normal list-disc lg:text-lg'>
                        <li>
                            Ofrece productos de energía renovable líderes en el mercado, destacando por su innovación, eficiencia y 
                            sostenibilidad.
                        </li>
                        <br />
                        <li>
                            Apoya a hogares, negocios y fábricas en su transición hacia la autosuficiencia energética.
                        </li>
                        <br />
                        <li>
                            Benefíciate de ventajas exclusivas, incluido un amplio soporte técnico y promocional.
                        </li>
                    </ul>
                    <br />
                    <p className='lg:text-xl'>
                        Hazte distribuidor hoy. Estamos en busca de socios que compartan nuestra visión de un futuro más verde y 
                        autosuficiente. Si estás interesado en esta oportunidad, te invitamos a dejarnos tus datos en el 
                        formulario de contacto a continuación o a ponerte en contacto con nosotros. Juntos, podemos liderar el cambio 
                        hacia un mundo más sostenible.
                    </p>
                    <br />
                    <FormularioDist />
                </div>
                <br />
            </div>
            <br />
        </section>
        <br />
    </>
  )
}

export default DistribuidorTextForm