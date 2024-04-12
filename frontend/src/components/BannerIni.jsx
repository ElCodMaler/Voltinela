import React from 'react'

function BannerIni() {
  return (
    <>
        <section className="bg-center bg-cover bg-local bg-no-repeat bg-[url('../../public/respaldo-mesa.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('respaldo-mesa.jpg')"}}>
            <div className="flex justify-center px-4 mx-auto max-w-screen-xl text-center py-24 md:py-20 lg:py-16">
                <img className='w-40 md:w-96' src="voltinela-logo2-blanco.png" alt="voltinela-logo" />
            </div>
        </section>
    </>
  )
}

export default BannerIni