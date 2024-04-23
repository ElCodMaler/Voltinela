import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DetalTextForm from '../components/DetalTextForm'

function Detal({info}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <DetalTextForm info={info} />
    </>
  )
}

export default Detal