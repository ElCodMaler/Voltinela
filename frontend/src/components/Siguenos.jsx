import React  from 'react'
import { Banner, Button } from 'flowbite-react'
import { AiOutlineWhatsApp, AiFillFacebook, AiOutlineFacebook, AiOutlineInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { FaXTwitter, FaFacebookF, FaLinkedinIn   } from "react-icons/fa6"
import { BiLogoGmail } from "react-icons/bi";
import { SiMercadopago } from 'react-icons/si'
import { FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Siguenos({info}) {
  return (
    <>
      <br />
      <section id='siguenos'>
          <div className='titulo container mx-auto w-max lg:py-4 xl:py-1 2xl:py-2'>
              <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3 xl:text-3xl xl:px-6 2xl:text-4xl 2xl:py-2' style={{backgroundColor:'#84cc16'}}>
                  {info.conocenos}
              </h3>
          </div>
          <br />
          <Banner>
            <div className="container mx-auto px-4 py-2">
              <div className="grid grid-cols-3 text-gray-500" style={{justifyContent: 'space-evenly'}}>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://wa.me/584127351051">
                  <Button className='items-center p-0 h-16 w-16 rounded-2xl text-white shadow-xl bg-gradient-to-b from-[#25D366] to-[#128C7E] focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24'>
                    <AiOutlineWhatsApp className="h-14 w-14 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d">
                  <Button color='blue' className='items-end p-0 h-16 w-16 rounded-2xl text-white shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24'>
                    <FaFacebookF className="ms-2.5 h-12 w-12 lg:h-[4.5rem] lg:w-[4.5rem]" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr">
                  <Button id='instagram' className="items-center p-0 h-16 w-16 rounded-2xl bg-[url('/background-instagram.jpg')] bg-no-repeat bg-center bg-auto text-white shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24">
                      <AiOutlineInstagram className="h-16 w-16 lg:h-24 lg:w-24" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='items-center p-0 h-16 w-16 rounded-2xl text-white shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24' style={{backgroundColor: 'rgb(255, 255, 255)'}}>
                    <AiFillYoutube className="h-12 w-12 lg:h-20 lg:w-20" color='red' />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="#">
                  <Button className='items-center p-0 h-16 w-16 rounded-2xl text-white shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24' style={{backgroundColor: 'black'}}>
                    <FaXTwitter className="h-12 w-12 lg:h-20 lg:w-20" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.linkedin.com/company/voltinela/">
                  <Button className='items-center p-0 h-16 w-16 rounded-2xl text-white shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24' style={{backgroundColor: '#0a66c2'}}>
                    <FaLinkedinIn  className="mt-2 h-12 w-12 lg:h-[4.5rem] lg:w-[4.5rem]" />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="mailto:gilbertojeda30@gmail.com">
                  <Button id='gmail' className='items-center p-0 h-16 w-16 rounded-2xl shadow-xl focus:ring-0 lg:h-24 lg:rounded-3xl lg:w-24' style={{backgroundColor:'white'}}>
                    <img className='px-1 w-14 lg:w-20' src='/gmail-logo.png' />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.tiktok.com/@voltinela">
                  <Button id='mercadoLibre' className='items-center p-0 h-16 w-16 rounded-2xl shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24' style={{backgroundColor:'white'}}>
                    <img className='px-1 w-14 lg:w-20' src='/mercadoLibre-logo.png' />
                  </Button>
                </a>
                <a className="mx-5 my-4 flex justify-center md:mx-8 lg:mx-14 lg:my-8" href="https://www.tiktok.com/@voltinela">
                  <Button id='tiktok' className='items-center p-0 h-16 w-16 rounded-2xl shadow-xl focus:ring-0 lg:rounded-3xl lg:h-24 lg:w-24' style={{backgroundColor:'white'}}>
                    <img className='px-1 w-14 lg:w-20' src='/tiktok-logo.png' />
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