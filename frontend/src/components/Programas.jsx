import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

function Programas({info}) {
  return (
    <>
        <br />
        <section id='programas'>
            <div className='titulo container mx-auto w-max lg:py-4 xl:py-1 2xl:py-2'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3 xl:text-2xl xl:px-6 2xl:text-2xl 2xl:py-2' style={{backgroundColor:'#84cc16'}}>{info.programas}</h3>
            </div>
            <br />
            <div className='container mx-auto px-4 sm:mx-10 md:mx-16 xl:mx-28 2xl:mx-36' style={{width:'-webkit-fill-available'}}>
                <div className='grid gab-2 grid-cols-2 space-x-3 h-32 md:h-48 lg:h-72 xl:h-48 2xl:h-60'>
                    <Link to={'/InvitaYGana'}>
                      <Card className="carta border-0 h-full me-2 bg-no-repeat bg-cover bg-center bg-[url('/respaldo-3.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-2xl">
                          {info.invitaGana}
                        </h5>
                      </Card>
                    </Link>
                    <Link to={'/Embajadores'}>
                      <Card className="carta border-0 h-full bg-no-repeat bg-cover bg-center bg-[url('/respaldo-1.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
                        <h5 className="text-center text-xl font-bold break-all tracking-tight text-white md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-2xl">
                          {info.embajadores}
                        </h5>
                      </Card>
                    </Link>
                </div>
                <br />
                <div className='grid gab-2 grid-cols-2 space-x-3 h-32 md:h-48 lg:h-72 xl:h-48 2xl:h-60'>
                    <Link to={'/Instala+'}>
                      <Card className="carta border-0 h-full me-2 bg-no-repeat bg-cover bg-center bg-[url('/respaldo-4.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
                        <h5 className="text-center text-xl font-bold break-all tracking-tight text-white md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-2xl">
                          {info.instalacion}
                        </h5>
                      </Card>
                    </Link>
                    <Link to={'/Carreras'}>
                      <Card className="carta border-0 h-full bg-no-repeat bg-cover bg-center bg-[url('/respaldo-2.jpg')] bg-gray-400 bg-blend-multiply shadow-xl">
                        <h5 className="text-center text-xl font-bold tracking-tight text-white md:text-3xl lg:text-5xl xl:text-3xl 2xl:text-2xl">
                          {info.carreras}
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