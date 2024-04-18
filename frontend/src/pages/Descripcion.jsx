import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DescripcionCont from '../components/DescripcionCont'

function Descripcion({ carrito, setCarrito, productos}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <DescripcionCont carrito={carrito} setCarrito={setCarrito} productos={productos} />
    </>
  )
}

export default Descripcion