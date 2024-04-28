import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function NosotrosCont({info}) {
  return (
    <>
        <section className='bg-white lg:mt-12 lg:py-10' style={{borderBottomWidth: "0.1rem", borderColor: "rgb(229 231 235)"}}>
            <br />
            <br />
            <div className='ms-4 w-fit rounded-md sm:ms-10 md:ms-16 lg:rounded-xl lg:ms-28 xl:ms-44 2xl:ms-60' style={{backgroundColor:'#81cc00'}}>
                <Link className='flex p-3' to={'/'}>
                    <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}} />
                </Link>
            </div>
            <div className='titulo container mx-auto w-max'>
                <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full lg:text-3xl' style={{backgroundColor:'#81cc00'}}>{info.nosotros}</h3>
            </div>
            <br />
            <div>
                <div className="container mx-auto px-4 py-3 flex flex-col justify-between leading-normal sm:px-10 md:px-16 lg:px-28 xl:px-44 2xl:px-60">
                    
                    <p className="mb-3 font-normal text-gray-700 lg:text-2xl">{info.texto1Nosotros}</p>
                    <p className="mb-3 font-normal text-gray-700 lg:text-2xl">{info.texto2Nosotros}</p>
                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />

                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3 lg:text-3xl">
                        {info.sub1Nosotros}
                    </h5>
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-2xl">{info.texto3Nosotros}</p>
                    <hr class="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-5" />
                    <h5 className="mb-2 text-center text-2xl font-bold tracking-tight md:pb-3 lg:text-3xl">
                        {info.sub2Nosotros}
                    </h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 lg:text-2xl">{info.texto4Nosotros}</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default NosotrosCont