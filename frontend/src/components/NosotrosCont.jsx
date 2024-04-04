import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function NosotrosCont() {
  return (
    <>
        <section className='py-5'>

            <div className='ms-4 w-fit bg-white/30 rounded-md'>
                <Link className='flex p-3' to={'/Voltinela'}>
                    <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
            </div>

            <div className='titulo container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>Nosotros</h3>
            </div>

            <br />

            <div className="px-4">

                <div className="container mx-auto px-4 py-3 flex flex-col bg-white rounded-lg justify-between leading-normal md:px-12 shadow-xl">

                    <h5 className="my-2 text-center text-2xl font-bold tracking-tight md:my-3">
                        ¿Qué es Voltinela?
                    </h5>

                    <p className="mb-3 font-normal text-gray-700">
                        Voltinela se enfoca en reforzar la seguridad energética y promover la autosuficiencia mediante 
                        soluciones de energía renovable. Actualmente, destacamos por ofrecer productos innovadores como 
                        sistemas de almacenamiento de energía, baterías portátiles y paneles solares, asegurando que 
                        estos estén disponibles y al alcance de todos.
                    </p>
                    <p className="mb-3 font-normal text-gray-700">
                    Con estos productos a la mano, Voltinela permite a hogares, negocios y fábricas mantener una fuente 
                    de energía confiable, accesible y sostenible, subrayando la importancia de contar con soluciones 
                    energéticas eficientes y renovables en el presente.
                    </p>

                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />

                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3">
                        Visión
                    </h5>
                        
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Brindamos seguridad energética e innovación en el área de energías renovables, 
                        no solo construyendo productos de la máxima calidad, sino también creando tecnologías 
                        más allá de lo conocido.
                    </p>

                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />

                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3">
                        Misión
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Brindamos seguridad energética e independencia a cada hogar, negocio, fábrica o 
                        entidad que necesite una solución confiable a los problemas incontrolables.
                    </p>

                </div>

            </div>

            {/*<br />

            <div className='container mx-auto px-4 grid grid-cols-1 gap-4 justify-center lg:grid-cols-2'>
                
                <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow md:grid-cols-2 md:w-auto shadow-xl">
                    
                    <img className="h-48 w-full object-cover rounded-t-lg md:h-full md:w-auto md:rounded-none md:rounded-s-lg" src="vision.jpg" alt="" />
                    
                    <div className="flex flex-col justify-between p-4 leading-normal md:px-12">
                        
                        <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                            Visión
                        </h5>
                        
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Brindamos seguridad energética e innovación en el área de energías renovables, 
                            no solo construyendo productos de la máxima calidad, sino también creando tecnologías 
                            más allá de lo conocido.
                        </p>
                    
                    </div>
                
                </div>

                <div className="flex flex-col w-full items-center bg-white rounded-lg shadow md:flex-row shadow-xl">
                    
                    <div className="flex flex-col justify-between p-4 leading-normal md:px-12">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                            Misión
                        </h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            Brindamos seguridad energética e independencia a cada hogar, negocio, fábrica o 
                            entidad que necesite una solución confiable a los problemas incontrolables.
                        </p>

                    </div>

                    <img className="h-48 w-full object-cover rounded-b-lg md:h-full md:w-1/2 md:rounded-b-none md:rounded-r-lg" src="mision.jpg" alt="" />
                
                </div>
            
            </div>*/}

        </section>
    </>
  )
}

export default NosotrosCont