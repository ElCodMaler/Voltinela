import React from 'react'
import FormularioDetal from './FormularioDetal'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

function DetalTextForm({info}) {
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <section className='bg-white lg:mt-12'>
            <br />
            <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
                <Link className='flex p-3' to={'/'}>
                    <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
                </Link>
            </div>
            <div className='titulo container mx-auto w-max lg:py-10'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>{info.detal}</h3>
            </div>
            <br />
            <div className='sm:mx-10 md:mx-16 lg:py-10 lg:mx-20 xl:mx-44 2xl:mx-60'>
                <div className='container mx-auto px-5 lg:px-12'>
                    <br />
                    <h2 className='text-lg font-semibold lg:text-3xl'>{info.sub1Detal}</h2>
                    <br />
                    <h3 className='font-medium lg:text-xl'>{info.sub1Detal}</h3>
                    <p className='lg:text-xl'>{info.texto1Detal}</p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>{info.tituloListDetal}</h3>
                    <br />
                    <ul className='container mx-auto px-10 text-sm font-normal list-disc lg:text-lg'>
                        <li>
                            {info.sub1ListDetal}
                        </li>
                        <br />
                        <li>
                            {info.sub2ListDetal}
                        </li>
                        <br />
                        <li>
                            {info.sub3ListDetal}
                        </li>
                    </ul>
                    <br />
                    <p className='lg:text-xl'>
                        {info.texto2Detal}
                    </p>
                    <br />
                    <FormularioDetal info={info} />
                    <br />
                </div>
            </div>
        </section>
        <br />
    </>
  )
}

export default DetalTextForm