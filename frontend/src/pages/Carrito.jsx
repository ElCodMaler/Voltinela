import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CarritoCont from '../components/CarritoCont'

function Carrito({ info, carrito, removeProduct }) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <main className='mt-16 sm:mt-16 md:mt-24 lg:mt-32 xl:mt-28 2xl:mt-32'>
        <CarritoCont info={info} carrito={carrito}  removeProduct={removeProduct}/>
      </main>
    </>
  )
}

export default Carrito