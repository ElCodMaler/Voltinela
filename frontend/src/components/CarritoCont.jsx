import React from 'react'
import { Button } from "flowbite-react"
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from "react-icons/ai"
import { MdDelete } from "react-icons/md"

function CarritoCont({info, carrito, removeProduct}) {

  const navigate = useNavigate();

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
        <img className="p-8 rounded-t-lg" src={producto.imagen} alt={producto.titulo} onClick={() => handleSelectedProduct(producto.id, producto.categoria)} />
        <div className="px-5 pb-5">
          <h5 className="text-xl font-bold tracking-tight text-gray-900">{producto.titulo}</h5>
          <h6 className="text-lg font-semibold tracking-tight text-gray-900">{producto.tituloTecnico}</h6>
          <br/>
          <div class="flex items-center justify-between">
              {/*<span class="text-3xl font-bold text-gray-900 dark:text-white">${producto.precio}</span>*/}
              <Button onClick={() => {removeProduct(producto.id)}} className="px-1 py-1 text-white text-center bg-red-600 border-2 border-white rounded-full hover:border-red-600 hover:text-red-600 hover:bg-white">
                <MdDelete className='text-2xl' />
                <h6 className='font-medium text-base'>{info.eliminar}</h6>
              </Button>
          </div>
        </div>
      </div>
    ))
  };

  const handleSelectedProduct = (id, categoria) => {
    navigate(`/Descripcion/${categoria}/${id}`);
    window.location.reload();
  };
    
  return (
    <>
        <section id='carritoCont' className='bg-white lg:mt-12' style={{borderBottomWidth: "0.1rem", borderColor: "rgb(229 231 235)"}}>
          <br />
          <br />
          <div className='ms-4 w-fit rounded-md lg:rounded-xl lg:ms-24' style={{backgroundColor:'#81cc00'}}>
            <Link className='flex p-3' to={'/'}>
                <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
            </Link>
          </div>
          <div className='titulo container mx-auto w-max'>
            <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#81cc00'}}>{info.carrito}</h3>
          </div>
          <br />
          <div className='container mx-auto px-4 w-fit grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:gap-10'>
            {renderCarrito()}
          </div>
          <br />
            <div className='w-full flex justify-center py-5'>
              <Button onClick={() => {window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`); alert('Send!')}} className='bg-[#81cc00] border-2 border-white text-white focus:ring-0 lg:border-4 hover:bg-white hover:border-[#81cc00] hover:text-[#81cc00]' pill>
                <AiOutlineWhatsApp className='mr-2 h-7 w-7 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14' />
                <p className='text-lg lg:text-3xl 2xl:text-5xl'>{info.cotizar}</p>
              </Button>
            </div>
          <br />
        </section>
    </>
  )
}

export default CarritoCont