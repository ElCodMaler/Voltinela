import React from 'react'
import { Banner } from 'flowbite-react'
import { AiOutlineWhatsApp, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

function Siguenos() {
  return (
    <>
        <br />
        <section id='siguenos'>

            <div className='titulo container mx-auto w-max shadow-xl'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>
                    Conocenos
                </h3>
            </div>
            <br />
            <Banner className='bg-gray-100'>
              <div className="container mx-auto px-4 py-2">

                <div className="flex flex-wrap text-gray-500" style={{justifyContent: 'space-evenly'}}>

                  <a className="h-12 w-12 rounded-full bg-lime-400 text-white p-1" href="#" style={{backgroundColor:'#84cc16'}}>
                    <span>
                      <AiOutlineWhatsApp className="h-10 w-10" />
                    </span>
                  </a>
                  <a className="h-12 w-12 rounded-full bg-lime-400 text-white p-1" href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" style={{backgroundColor:'#84cc16'}}>
                    <span>
                      <AiFillFacebook className="h-10 w-10" />
                    </span>
                  </a>
                  <a className="h-12 w-12 rounded-full bg-lime-400 text-white p-1" href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" style={{backgroundColor:'#84cc16'}}>
                    <span >
                        <AiOutlineInstagram className="h-10 w-10" />
                    </span>
                  </a>
                  <a className="h-12 w-12 rounded-full bg-lime-400 text-white p-1" href="https://www.linkedin.com/company/voltinela/" style={{backgroundColor:'#84cc16'}}>
                    <span>
                      <AiFillLinkedin className="h-10 w-10" />
                    </span>
                  </a>
                  <a className="h-12 w-12 rounded-full bg-lime-400 text-white p-1" href="https://www.tiktok.com/@voltinela" style={{backgroundColor:'#84cc16'}}>
                    <span>
                      <FaTiktok className="h-10 w-10" />
                    </span>
                  </a>

                </div>

              </div>
            </Banner>
            
        </section>
    </>
  )
}

export default Siguenos