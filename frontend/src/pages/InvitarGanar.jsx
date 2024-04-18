import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import InvGanCont from '../components/InvGanCont'

function InvitarGanar() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <InvGanCont />
    </>
  )
}

export default InvitarGanar