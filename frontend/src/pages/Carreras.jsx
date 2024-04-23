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
      <CarrerasCont info={info} />
    </>
  )
}

export default Carreras