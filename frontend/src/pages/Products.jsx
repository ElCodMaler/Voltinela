import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { useLocation } from 'react-router-dom'
import Listado from '../components/Listado'

function Products({productos}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <main className='mt-16 sm:mt-20 md:mt-28 lg:mt-36 xl:mt-28 2xl:mt-32'>
        <Listado productos={productos} />
      </main>
    </>
  )
}

export default Products