import React from 'react'
import { Button } from 'flowbite-react'
import { Link } from 'react-router-dom'

function Nosotros({info}) {
  return (
    <>
      <br />
      <div className='titulo container mx-auto w-max lg:py-4 xl:py-1 2xl:py-2'>
         <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3 xl:text-2xl xl:px-6 2xl:text-2xl 2xl:py-2' style={{backgroundColor:'#84cc16'}}>{info.nosotros}</h3>
      </div>
      <br />
      <Link to={'/Nosotros'}>
        <section id='aboutUs'>
          <div className="bg-cover bg-center bg-no-repeat bg-[url('/teclado.jpg')] bg-gray-600 bg-blend-multiply">
              <div className="px-4 mx-auto max-w-screen-xl text-center py-12 md:py-16 lg:py-24 lg:px-20 xl:py-14 2xl:py-16">
                  <p className='mb-1 text-base font-semibold text-white sm:px-16 lg:text-4xl xl:text-xl 2xl:text-2xl'>
                    {info.textoNosotros}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center mt-3 lg:pt-8">
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold lg:text-4xl'>{info.mision}</h6></Button>
                    <Button className='focus:ring-0' size='xl' pill><h6 className='text-lg font-bold lg:text-4xl'>{info.vision}</h6></Button>
                  </div>
              </div>
          </div>
        </section>
      </Link>
    </>
  )
}


export default Nosotros