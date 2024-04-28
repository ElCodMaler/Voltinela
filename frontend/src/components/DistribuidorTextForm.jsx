import React from 'react'
import FormularioDist from './FormularioDist'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

function DistribuidorTextForm({info}) {
  return (
    <>
        <section className='bg-white lg:mt-12' style={{borderBottomWidth: "0.1rem", borderColor: "rgb(229 231 235)"}}>
            <br />
            <br />
            <div className='ms-4 w-fit rounded-md sm:ms-10 md:ms-16 lg:rounded-xl lg:ms-20 xl:ms-44 2xl:ms-60' style={{backgroundColor:'#81cc00'}}>
                <Link className='flex p-3' to={'/'}>
                    <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}} />
                </Link>
            </div>
            <div className='titulo container mx-auto w-max lg:py-10'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#81cc00'}}>{info.distribuidor}</h3>
            </div>
            <div className='sm:mx-10 md:mx-16 lg:mx-20 xl:mx-44 2xl:mx-60'>
                <div className='container mx-auto px-5 lg:px-12'>
                    <br />
                    <h3 className='font-medium lg:text-xl'>{info.tituloDistribuidor}</h3>
                    <br />
                    <p className='lg:text-xl'>{info.sub1Distribuidor}</p>
                    <br />
                    <p className='lg:text-xl'>{info.texto1Distribuidor}</p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>{info.tituloListDistribuidor}</h3>
                    <br />
                    <ul className='container mx-auto px-10 text-sm font-normal list-disc lg:text-lg'>
                        <li>{info.sub1ListDistribuidor}</li>
                        <br />
                        <li>{info.sub2ListDistribuidor}</li>
                        <br />
                        <li>{info.sub3ListDistribuidor}</li>
                    </ul>
                    <br />
                    <p className='lg:text-xl'>{info.texto2Distribuidor}</p>
                    <br />
                    <FormularioDist info={info} />
                </div>
                <br />
            </div>
            <br />
        </section>
        <br />
    </>
  )
}

export default DistribuidorTextForm