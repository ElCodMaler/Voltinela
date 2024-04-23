import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import InvGanCont from '../components/InvGanCont'

function InvitarGanar({info}) {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
      <InvGanCont info={info} />
    </>
  )
}

export default InvitarGanar