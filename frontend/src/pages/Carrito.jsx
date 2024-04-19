import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import CarritoCont from '../components/CarritoCont'

function Carrito({carrito, removeProduct}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <CarritoCont carrito={carrito}  removeProduct={removeProduct}/>
    </>
  )
}

export default Carrito