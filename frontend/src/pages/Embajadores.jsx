import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import EmbajadoresCont from '../components/EmbajadoresCont'

function Embajadores() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <EmbajadoresCont />
    </>
  )
}

export default Embajadores