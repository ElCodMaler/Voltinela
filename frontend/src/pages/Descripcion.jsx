import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DescripcionCont from '../components/DescripcionCont'

function Descripcion({ info, carrito, setCarrito, productos}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <main className='mt-20 md:mt-28 lg:mt-40 xl:mt-36 2xl:mt-40'>
        <DescripcionCont info={info} carrito={carrito} setCarrito={setCarrito} productos={productos} />
      </main>
    </>
  )
}

export default Descripcion