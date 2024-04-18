import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DistribuidorTextForm from '../components/DistribuidorTextForm'

function Distribuidor() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <DistribuidorTextForm />
    </>
  )
}

export default Distribuidor