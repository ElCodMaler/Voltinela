import React from 'react'
import { Card, Button } from "flowbite-react"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai"

const CarritoCont = ({carrito, setCarrito}) => {

  const renderCarrito = () => {
    console.log(carrito);
    console.log('Ver', JSON.parse(localStorage.getItem('carrito')));
    const listCarito = JSON.parse(localStorage.getItem('carrito'));
    if (!listCarito) {
      console.log('Esta cargando');
      return (
        <div className='container mx-auto px-4 w-full'>
          <h2>No hay anda</h2>
        </div>
      );
    } else {
      return listCarito.map((producto) => (
        <div className='py-5'>
          <Card key={producto.id} className="cartaCarrito" imgSrc={`${producto.imagen}`} horizontal>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {producto.titulo}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {producto.descripcion}
            </p>
          </Card>
        </div>
      ))
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <br />
        <section id='carritoCont' className='bg-white lg:mt-12'>
          <br />
          <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
            <Link className='flex p-3' to={'/Voltinela/'}>
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
              <Button className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
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