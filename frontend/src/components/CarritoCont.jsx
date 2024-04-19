import React from 'react'
import { Card, Button } from "flowbite-react"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai"

function CarritoCont({carrito, removeProduct}) {
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
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{producto.tituloTecnico}</h5>
                </a>
                <br/>
                <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">${producto.precio}</span>
                    <Button onClick={() => {removeProduct(producto.id)}} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delete</Button>
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
            <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Carrito</h3>
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
                <p className='text-base'>Contactar</p>
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