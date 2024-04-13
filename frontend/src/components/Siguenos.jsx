import React from 'react'
import { Banner, Button } from 'flowbite-react'
import { AiOutlineWhatsApp, AiFillFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi";
import { SiMercadopago } from 'react-icons/si'
import { FaTiktok } from 'react-icons/fa'

function Siguenos() {
  return (
    <>
      <br />
      <section id='siguenos'>
          <div className='titulo container mx-auto w-max lg:py-8'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>
                  Conocenos
              </h3>
          </div>
          <br />
          <Banner>
            <div className="container mx-auto px-4 py-2">
              <div className="grid grid-cols-3 text-gray-500" style={{justifyContent: 'space-evenly'}}>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor: 'rgb(0, 230, 118)'}}>
                    <AiOutlineWhatsApp className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d">
                  <Button color='blue' className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24'>
                    <AiFillFacebook className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr">
                  <Button gradientDuoTone='pinkToOrange' className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24'>
                      <AiOutlineInstagram className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor: 'rgb(255, 0, 0)'}}>
                    <AiFillYoutube className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor: 'black'}}>
                    <FaXTwitter className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.linkedin.com/company/voltinela/">
                  <Button className='p-0 h-16 w-16 rounded-full text-white shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor: '#0a66c2'}}>
                    <AiFillLinkedin className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='p-0 h-16 w-16 rounded-full shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor:'white'}}>
                    <BiLogoGmail className="h-12 w-12 lg:h-20 lg:w-20" color='red' />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='p-0 h-16 w-16 rounded-full shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor:'yellow'}}>
                    <SiMercadopago className="h-12 w-12 lg:h-20 lg:w-20" color='black' />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.tiktok.com/@voltinela">
                  <Button className='p-0 h-16 w-16 rounded-full shadow-xl focus:ring-0 lg:h-24 lg:w-24' style={{backgroundColor:'white'}}>
                    <FaTiktok className="h-12 w-12 lg:h-20 lg:w-20" color='black' />
                  </Button>
                </a>
              </div>
            </div>
          </Banner>
      </section>
    </>
  )
}

export default Siguenos