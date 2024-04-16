import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import CarruselProductos from '../components/CarruselProductos'
import DetallesTecnicosProd from '../components/DetallesTecnicosProd'

function DescripcionCont({ carrito, setCarrito, productos}) {
    //variables de contacto de whatsapp
    const numero_cliente = '4128849604';

    let mensaje = 'Producto: '

    const navigate = useNavigate();

    const { id } = useParams();

    const productoSeleccionado = productos.find((p) => p.id === id);

    mensaje = mensaje + productoSeleccionado.titulo+'.';//le agrego el producto a cotizar

    const handleBack = () => {
      navigate('/Productos');
    };

    const handleAddCar = () => {
      if(productoSeleccionado){
        setCarrito([...carrito, { ...productoSeleccionado}]);
      }else{
        alert('no existe tal valor')
      }  
    };

  return (
    <>
        <main id='descripcion'>
            <br />
            <br />
            <br />
            <section className='container mx-auto px-4 lg:mt-20'>
              <div className='w-fit p-3 bg-white/30 rounded-md'>
                <Link className='flex' to={'/Productos'} onClick={() => handleBack()}>
                  <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
              </div>
              <br />
                <div className='flex flex-col items-center'>

                  <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow md:grid-cols-2 md:w-auto shadow-xl">
                    <div className="h-72 sm:h-96 md:h-80 lg:h-96 xl:h-svh">
                      <CarruselProductos />
                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal md:px-12">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                        {productoSeleccionado.titulo}
                      </h5>
                      <h6 className="mb-2 text-xl font-semibold tracking-tight md:pb-3">
                        {productoSeleccionado.tituloTecnico}
                      </h6>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {productoSeleccionado.descripcion}
                      </p>
                      <DetallesTecnicosProd />
                      <div className='flex flex-col justify-center py-5'>
                        <Button className='focus:ring-0' pill style={{backgroundColor:'#84cc16'}} onClick={handleAddCar}>
                          <HiShoppingCart className='mr-2 h-7 w-7' />
                          <p className='text-base'>Añadir al carrito</p>
                        </Button>
                        <br />
                        <Button onClick={() => {window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`); alert('Send!')}} className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
                          <AiOutlineWhatsApp className='mr-2 h-7 w-7' />
                          <p className='text-base'>Contactar</p>
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