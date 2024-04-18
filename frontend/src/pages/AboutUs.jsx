import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import BannerNos from '../components/BannerNos'
import NosotrosCont from '../components/NosotrosCont'

function AboutUs() {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return (
    <>
        {/*<BannerNos />*/}

        <NosotrosCont />
    </>
  )
}

export default AboutUs