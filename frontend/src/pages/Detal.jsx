import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DetalTextForm from '../components/DetalTextForm'

function Detal() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <DetalTextForm />
    </>
  )
}

export default Detal