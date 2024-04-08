import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function NosotrosCont() {
  return (
    <>
        <br />
        <br />
        <br />
        <section className='py-5'>

            <div className='ms-4 w-fit bg-white/30 rounded-md'>
                <Link className='flex p-3' to={'/Voltinela/'}>
                    <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
            </div>

            <div className='titulo container mx-auto w-max'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl lg:text-3xl' style={{backgroundColor:'#84cc16'}}>Nosotros</h3>
            </div>

            <br />

            <div className="bg-white shadow-xl">

                <div className="container mx-auto px-4 py-3 flex flex-col justify-between leading-normal sm:px-10 md:px-16 lg:px-20">

                    <h5 className="my-2 text-center text-2xl font-bold tracking-tight md:my-3 lg:text-3xl">
                        ¿Qué es Voltinela?
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 lg:text-2xl">
                        Voltinela se enfoca en reforzar la seguridad energética y promover la autosuficiencia mediante 
                        soluciones de energía renovable. Actualmente, destacamos por ofrecer productos innovadores como 
                        sistemas de almacenamiento de energía, baterías portátiles y paneles solares, asegurando que 
                        estos estén disponibles y al alcance de todos.
                    </p>
                    <p className="mb-3 font-normal text-gray-700 lg:text-2xl">
                    Con estos productos a la mano, Voltinela permite a hogares, negocios y fábricas mantener una fuente 
                    de energía confiable, accesible y sostenible, subrayando la importancia de contar con soluciones 
                    energéticas eficientes y renovables en el presente.
                    </p>

                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />

                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3 lg:text-3xl">
                        Visión
                    </h5>
                        
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-2xl">
                        Brindamos seguridad energética e innovación en el área de energías renovables, 
                        no solo construyendo productos de la máxima calidad, sino también creando tecnologías 
                        más allá de lo conocido.
                    </p>

                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />

                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3 lg:text-3xl">
                        Misión
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-2xl">
                        Brindamos seguridad energética e independencia a cada hogar, negocio, fábrica o 
                        entidad que necesite una solución confiable a los problemas incontrolables.
                    </p>

                </div>

            </div>

        </section>
    </>
  )
}

export default NosotrosCont