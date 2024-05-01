import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import CarruselProductos from '../components/CarruselProductos'
import DetallesTecnicosProd from '../components/DetallesTecnicosProd'
import {toast, Toaster} from 'react-hot-toast'
import PregRespProd from './PregRespProd'

function DescripcionCont({ info, carrito, setCarrito, productos }) {
  //variables de contacto de whatsapp
  const numero_cliente = '4127351051';

  let mensaje = 'Quiero saber más sobre ';

  const navigate = useNavigate();

  const { categorias, id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === id);

  mensaje = mensaje + productoSeleccionado.titulo+'.';//le agrego el producto a cotizar

  const handleBack = () => {
    navigate('/Productos');
  };

  const manualTec = () => {
    if (productoSeleccionado.pdf !== "#") {
      return (
        <>
          <div className='flex items-center'>
            <h6 className="me-5 text-lg font-semibold tracking-tight xl:text-2xl 2xl:text-3xl">
              {info.manualTecnico}:
            </h6>
            <a href={`${productoSeleccionado.pdf}`} download={`${productoSeleccionado.pdfNombre}`}>
              <Button className='px-1 py-1 bg-[#81cc00] text-white border-2 border-white focus:ring-0 hover:bg-white hover:text-[#81cc00] hover:border-[#81cc00] lg:px-2' pill>
                <p className='text-base lg:text-lg xl:text-xl'>{info.descargarPdf}</p>
              </Button>
            </a>
          </div>
          <br />
        </>
      )
    }
  };
  
  const exite_carrito = carrito.some((producto) => producto.id == id);
  
  const handleAddCar = () => {
    if(!exite_carrito){
      setCarrito(productoSeleccionado);
      toast.success(`Guardaste ${productoSeleccionado.titulo} al carrito`)
    }else{
      toast.error(`${productoSeleccionado.titulo} ya se encuentra en el carrito`)
    }  
  };

  return (
    <>
      <div id='descripcion'>
        <section className='container mx-auto px-4 lg:mt-20'>
          <Toaster/>{/**notificacion del carrito */}
          <div className='w-fit bg-white/50 rounded-md sm:ms-10 md:ms-16 lg:rounded-xl lg:ms-20 xl:ms-28 2xl:ms-36'>
            <Link className='flex p-3' to={`/Productos/${categorias}`} onClick={() => handleBack()}>
              <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}} />
            </Link>
          </div>
          <br />
          <div>
            <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow sm:mx-10 md:mx-16 lg:grid-cols-2 md:w-auto shadow-xl xl:mx-28 2xl:mx-36">
              <div className="h-96 sm:h-[33rem] lg:h-[26rem] xl:h-[30rem] 2xl:h-[33rem]">
                <CarruselProductos />
              </div>
              <div className="flex flex-col justify-between p-4 leading-normal md:px-12">
                <h5 className="mb-2 text-lg font-bold tracking-tight md:pb-3 lg:text-xl xl:text-2xl 2xl:text-3xl">
                  {productoSeleccionado.titulo}
                </h5>
                <h6 className="mb-2 text-lg font-semibold tracking-tight md:pb-3 xl:text-xl 2xl:text-2xl">
                  {productoSeleccionado.tituloTecnico}
                </h6>
                <p className="mb-3 text-base font-normal text-gray-700 dark:text-gray-400 xl:text-lg 2xl:text-xl">
                  {productoSeleccionado.descripcion}
                </p>
                <div className='flex'>
                  <h6 className="me-5 text-lg font-semibold tracking-tight sm:text-xl lg:text-2xl 2xl:text-3xl">
                    {info.precio}:
                  </h6>
                  <p className='flex flex-row text-lg font-bold text-black sm:text-xl lg:text-2xl 2xl:text-3xl'><span className='pt-0.5 text-sm'>US$</span>{productoSeleccionado.precio}<span className='content-end pb-0.5 text-sm sm:pb-0 sm:text-base lg:text-lg 2xl:text-xl'>,00</span></p>
                  <br />
                </div>
                <DetallesTecnicosProd info={info} productos={productos} />
                <br />
                {manualTec()}
                <div className='flex flex-col justify-center pb-5'>
                  <Button className='bg-[#81cc00] text-white border-2 border-white hover:bg-white hover:text-[#81cc00] hover:border-[#81cc00] focus:ring-0' pill onClick={handleAddCar}>
                    <HiShoppingCart className='mr-2 h-7 w-7 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14' />
                    <p className='text-lg lg:text-3xl 2xl:text-5xl'>{info.anadirAlCarrito}</p>
                  </Button>
                  <br />
                  <Button onClick={() => {window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`); alert('Send!')}} className='border-2 border-[#81cc00] text-[#81cc00] focus:ring-0 lg:border-4 hover:border-white hover:text-white hover:bg-gradient-to-b from-[#25D366] to-[#128C7E]' pill>
                    <AiOutlineWhatsApp className='mr-2 h-7 w-7 lg:h-10 lg:w-10 2xl:h-14 2xl:w-14' />
                    <p className='text-lg lg:text-3xl 2xl:text-5xl'>{info.cotizar}</p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <PregRespProd productos={productos} info={info} />
      </div>
    </>
  )
}

export default DescripcionCont