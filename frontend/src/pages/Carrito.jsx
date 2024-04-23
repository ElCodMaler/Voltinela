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
      <CarritoCont info={info} carrito={carrito}  removeProduct={removeProduct}/>
    </>
  )
}

export default Carrito