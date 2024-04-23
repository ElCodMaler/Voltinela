import React from 'react'
import { Card, Button } from "flowbite-react"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai"
import { MdDelete } from "react-icons/md"
import Categorias from './Categorias'

function CarritoCont({info, carrito, removeProduct}) {
  //variables de contacto de whatsapp
  const numero_cliente = '4127351051';

  let mensaje = 'Quiero saber más sobre '

  const renderCarrito = () => {

    let band = true;

    carrito.map((producto) => {
      if(band){
        mensaje = mensaje + producto.titulo
        band = false;
      }else{
        mensaje = mensaje +', '+ producto.titulo 
      }
    })

    return carrito.map((producto) => (
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={producto.imagen} alt={producto.titulo} />
            </a>
            <div className="px-5 pb-5">
                <Link to={`#`}>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900">{producto.titulo}</h5>
                    <h6 className="text-lg font-semibold tracking-tight text-gray-900">{producto.tituloTecnico}</h6>
                </Link>
                <br/>
                <div class="flex items-center justify-between">
                    {/*<span class="text-3xl font-bold text-gray-900 dark:text-white">${producto.precio}</span>*/}
                    <Button onClick={() => {removeProduct(producto.id)}} className="bg-red-600 rounded-full px-1 py-1 text-center">
                      <MdDelete className='text-lg' />
                      <h6 className='text-white font-medium text-base'>{info.eliminar}</h6>
                    </Button>
                </div>
            </div>
        </div>
    ))
  }
    
  return (
    <>
        <br />
        <br />
        <br />
        <br />
        <section id='carritoCont' className='bg-white lg:mt-12'>
          <br />
          <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
            <Link className='flex p-3' to={'/'}>
                <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
            </Link>
          </div>
          <div className='titulo container mx-auto w-max lg:py-10'>
            <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>{info.carrito}</h3>
          </div>
          <br />
          <div className='container mx-auto px-4 lg:px-24'>
            <div className='grid grid-col-1 justify-center'>
              {renderCarrito()}
            </div>
            <br />
            <div className='w-full flex justify-center py-5'>
              <Button onClick={() => {window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`); alert('Send!')}} className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
                <AiOutlineWhatsApp className='mr-2 h-7 w-7' />
                <p className='text-base'>{info.contactar}</p>
              </Button>
            </div>
          </div>
          <br />
        </section>
        <br />
    </>
  )
}

export default CarritoCont