import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FormularioInvGan from './FormularioInvGan'

function InvGanCont({info}) {
  return (
    <>
        <br />
      <br />
      <br />
      <br />
      <section id='invita/gana' className='bg-white lg:mt-12'>
        <br />
        <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
          <Link className='flex p-3' to={'/'}>
              <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
          </Link>
        </div>
        <br />
        <div className='titulo container mx-auto w-max lg:py-10'>
           <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>{info.invitaGana}</h3>
        </div>
        <div className='sm:mx-10 md:mx-16 lg:mx-20 xl:mx-28 2xl:mx-36 bg-white'>
          <div className='container mx-auto px-4 py-5'>
            <h2 className='text-lg font-semibold lg:text-3xl'>{info.tituloInvGan}</h2>
            <br />
            <p className='lg:text-xl'>{info.texto1InvGan}</p>
            <br />
            <p className='lg:text-xl'>{info.texto2InvGan}</p>
            <p className='lg:text-xl'>{info.texto3InvGan}</p>
            <br />
            <FormularioInvGan info={info} />
            <br />
            <h2 className='text-lg font-semibold lg:text-3xl'>{info.reglasTitulo}</h2>
            <br />
            <ul className='container mx-auto px-10 text-sm font-normal list-decimal lg:text-lg'>
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub1}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto1}</li>
                  <li className='lg:text-xl'>{info.reglasTexto2}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub2}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto3}</li>
                  <li className='lg:text-xl'>{info.reglasTexto4}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub3}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto5}</li>
                  <li className='lg:text-xl'>{info.reglasTexto6}</li>
                  <li className='lg:text-xl'>{info.reglasTexto7}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub4}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto8}</li>
                  <li className='lg:text-xl'>{info.reglasTexto9}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub5}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto10}</li>
                  <li className='lg:text-xl'>{info.reglasTexto11}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub6}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto12}</li>
                  <li className='lg:text-xl'>{info.reglasTexto13}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub7}</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>{info.reglasTexto14}</li>
                  <li className='lg:text-xl'>{info.reglasTexto15}</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub8}</h3>
                <p className='lg:text-xl'>{info.reglasTexto16}</p>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>{info.reglasSub9}</h3>
                <p className='lg:text-xl'>{info.reglasTexto17}</p>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </section>
      <br />
    </>
  )
}

export default InvGanCont