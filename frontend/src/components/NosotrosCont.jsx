import React from 'react'
import { Card } from 'flowbite-react'

function NosotrosCont() {
  return (
    <>
        <section className='container mx-auto px-4 flex flex-wrap justify-center py-5'>
            <div className="flex flex-col w-full items-center bg-white rounded-lg shadow md:flex-row lg:w-3/4">
                <img className="h-48 w-full object-cover rounded-t-lg md:h-auto md:w-2/5 md:rounded-none md:rounded-s-lg" src="vision-mision.jpg" alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        Visión
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Brindamos seguridad energética e innovación en el área de energías renovables, 
                        no solo construyendo productos de la máxima calidad, sino también creando tecnologías 
                        más allá de lo conocido.
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default NosotrosCont