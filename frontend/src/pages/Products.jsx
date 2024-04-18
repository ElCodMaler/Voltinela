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

        <Listado productos={productos} />

    </>
  )
}

export default Products