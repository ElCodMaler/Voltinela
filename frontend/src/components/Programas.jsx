import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

function Programas() {
  return (
    <>
        <br />
        <section id='programas'>
            <div className='titulo container mx-auto w-max lg:py-8'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Programas</h3>
            </div>
            <br />
            <div className='container mx-auto px-4' style={{width:'-webkit-fill-available'}}>
                <div className='grid gab-2 grid-cols-2 space-x-3 h-32 md:h-48 lg:h-72 xl:h-96'>
                    <Link to={'/Voltinela/InvitaYGana'}>
                      <Card className="carta border-0 h-full me-2 bg-no-repeat bg-cover bg-center bg-[url('respaldo.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo.jpg')"}}>
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                          Invita y Gana
                        </h5>
                      </Card>
                    </Link>
                    <Link to={'/Voltinela/Embajadores'}>
                      <Card className="carta border-0 h-full bg-no-repeat bg-cover bg-center bg-[url('respaldo.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo.jpg')"}}>
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                          Embajadores
                        </h5>
                      </Card>
                    </Link>
                </div>
                <br />
                <div className='grid gab-2 grid-cols-2 space-x-3 h-32 md:h-48 lg:h-72 xl:h-96'>
                    <Link to={'/Voltinela/Instala+'}>
                      <Card className="carta border-0 h-full me-2 bg-no-repeat bg-cover bg-center bg-[url('respaldo.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo.jpg')"}}>
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                          Instala+
                        </h5>
                      </Card>
                    </Link>
                    <Link to={'/Voltinela/Carreras'}>
                      <Card className="carta border-0 h-full bg-no-repeat bg-cover bg-center bg-[url('respaldo.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo.jpg')"}}>
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-4xl">
                          Carreras
                        </h5>
                      </Card>
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default Programas