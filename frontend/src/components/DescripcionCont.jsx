import React, { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Button } from "flowbite-react"
import { AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import datos from '../dataBase/datos.json'
import CarruselProductos from '../components/CarruselProductos'
import DetallesTecnicosProd from '../components/DetallesTecnicosProd'
import { sendCustomEmail } from '../util/email'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function DescripcionCont({ carrito, setCarrito }) {

    const navigate = useNavigate();

    const { id } = useParams();

    const productoSeleccionado = productos.find((p) => p.id === id);

    //funciones de email
    const [details, setDetails] = useState({
      subject: "",
      message: "",
      to_email: "",
    });

    const handledDetailsChange = (event) => {
      const {name, value} = event.target

      setDetails( (prevDetails) => {
        return {
          ...prevDetails,
          [name]: value,
        };
      });
    };

    const handleSendEmail = () => {
      sendCustomEmail(details);
    };

    //de resto pura carpinteria

    const handleBack = () => {
      navigate('/Voltinela/Productos');
    };

    const handleAddCar = () => {
      const prod = productoSeleccionado;
      if (!carrito.includes(prod)) {
        setCarrito([...carrito, prod]);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log('Guardado', JSON.parse(localStorage.getItem('carrito')));
      };
      //setCarrito([...carrito, prod]);
      //localStorage.setItem('carrito', JSON.stringify(carrito));
      //console.log('Guardado', JSON.parse(localStorage.getItem('carrito')));
      console.log(prod.id);
    };

  return (
    <>
        <main id='descripcion'>
            <br />
            <br />
            <br />
            <section className='container mx-auto px-4 lg:mt-20'>
              <div className='w-fit p-3 bg-white/30 rounded-md'>
                <Link className='flex' to={'/Voltinela/Productos'} onClick={() => handleBack()}>
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
                        <Button className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
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