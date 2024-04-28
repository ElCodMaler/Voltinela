import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CarrerasCont from '../components/CarrerasCont'

function Carreras({info}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);
  
  return (
    <>
      <main className='mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-28 2xl:mt-32'>
        <CarrerasCont info={info} />
      </main>
    </>
  )
}

export default Carreras