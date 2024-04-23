import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import CarruselProductos from '../components/CarruselProductos'
import DetallesTecnicosProd from '../components/DetallesTecnicosProd'
import {toast, Toaster} from 'react-hot-toast'

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

    const exite_carrito = carrito.some((producto) => producto.id == id);

    const handleAddCar = () => {
      if(!exite_carrito){
        setCarrito(productoSeleccionado);
        toast.success('Este producto se agrego al carrito')
      }else{
        toast.error('Este producto ya se encuentra en el carrito')
      }  
    };

  return (
    <>
        <main id='descripcion'>
            <br />
            <br />
            <br />
            <section className='container mx-auto px-4 lg:mt-20'>
              <Toaster/>{/**notificacion del carrito */}
              <div className='w-fit p-3 bg-white/30 rounded-md sm:mx-10 md:mx-16 xl:mx-28 2xl:mx-36'>
                <Link className='flex' to={`/Productos/${categorias}`} onClick={() => handleBack()}>
                  <AiOutlineArrowLeft style={{color:'white'}} />
                </Link>
              </div>
              <br />
              <div>
                <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow sm:mx-10 md:mx-16 lg:grid-cols-2 md:w-auto shadow-xl xl:mx-28 2xl:mx-36">
                  <div className="h-80 sm:h-96 xl:h-svh">
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
                    <DetallesTecnicosProd info={info} />
                    <div className='flex flex-col justify-center py-5'>
                      <Button className='focus:ring-0' pill style={{backgroundColor:'#84cc16'}} onClick={handleAddCar}>
                        <HiShoppingCart className='mr-2 h-7 w-7' />
                        <p className='text-base'>{info.anadirAlCarrito}</p>
                      </Button>
                      <br />
                      <Button onClick={() => {window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`); alert('Send!')}} className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
                        <AiOutlineWhatsApp className='mr-2 h-7 w-7' />
                        <p className='text-base'>{info.contactar}</p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <br />
        </main>
    </>
  )
}

export default DescripcionCont