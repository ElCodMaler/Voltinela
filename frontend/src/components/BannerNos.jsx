import React from 'react'
import { Banner } from 'flowbite-react';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'

function BannerNos() {
  return (
    <>
        <section id='nosotros' className="bg-center bg-cover bg-local bg-no-repeat bg-[url('vision-mision.jpg')] bg-gray-400 bg-blend-multiply shadow-xl" style={{backgroundImage:"url('vision-mision.jpg')"}}>
            
            <div className="flex justify-center px-4 mx-auto max-w-screen-xl text-center py-24 md:py-20 lg:py-16">
                <img className='w-40 md:w-96' src="voltinela-logo2-blanco.png" alt="" />
            </div>
        
          <Banner className='bg-gray-100'>
            <div className="container mx-auto px-4 py-2">

              {/*<p className='flex justify-center items-center text-sm font-medium text-gray-500'>Siguenos</p>*/}

              <div className="flex flex-wrap text-gray-500" style={{justifyContent: 'space-evenly'}}>
                
                <a className="h-10 w-10 rounded-full bg-gray-300 p-1" href="#">
                  <span>
                    <AiOutlineWhatsApp className="h-8 w-8" />
                  </span>
                </a>
                <a className="h-10 w-10 rounded-full bg-gray-300 p-1" href="https://www.linkedin.com/company/voltela/">
                  <span >
                      <AiOutlineInstagram className="h-8 w-8" />
                  </span>
                </a>
                <a className="h-10 w-10 rounded-full bg-gray-300 p-1" href="#">
                  <span>
                    <AiFillLinkedin className="h-8 w-8" />
                  </span>
                </a>
                
              </div>
              
            </div>

          </Banner>

        </section>
    </>
  )
}

export default BannerNos