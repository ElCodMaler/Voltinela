import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import DistribuidorTextForm from '../components/DistribuidorTextForm'

function Distribuidor({info}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <DistribuidorTextForm info={info} />
    </>
  )
}

export default Distribuidor