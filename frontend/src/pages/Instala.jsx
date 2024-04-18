import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import InstalaCont from '../components/InstalaCont'

function Instala() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <InstalaCont />
    </>
  )
}

export default Instala