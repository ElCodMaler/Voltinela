import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Card } from 'flowbite-react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function Listado({productos}) {

    const navigate = useNavigate();

    const { categorias } = useParams();

    const renderTitulo = () => {
        if (categorias === 'Todos') {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:px-6 lg:text-3xl lg:py-2 lg:px-6 xl:text-xl xl:py-3 xl:px-8 2xl:text-2xl 2xl:py-2 2xl:px-8' style={{backgroundColor:'#81cc00', boxShadow: '0px 3px 20px -2px black'}}>Productos</h3>
        } else {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:px-6 lg:text-3xl lg:py-2 lg:px-6 xl:text-xl xl:py-3 xl:px-8 2xl:text-2xl 2xl:py-2 2xl:px-8' style={{backgroundColor:'#81cc00', boxShadow: '0px 3px 20px -2px black'}}>{categorias}</h3>
        }
    };

    const renderProductos = () => {
        if (categorias === 'Todos') {
            return productos.map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id} onClick={() => handleSelectedProduct(producto.id)}>
                    <img src={producto.imagen} alt={producto.titulo} />
                    <div className="flex flex-col justify-between items-start">
                        <h5 className="pb-2 text-base font-bold tracking-tight text-gray-900 lg:text-4xl lg:pb-4">{producto.titulo}</h5>
                    </div>
                </Card>
            ))
        } else {
            return productos.filter(producto => producto.categoria === categorias).map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id} onClick={() => handleSelectedProduct(producto.id)}>
                    <img src={producto.imagen} alt={producto.titulo} />
                    <div className="flex flex-col justify-between items-start">
                        <h5 className="pb-2 text-base font-bold tracking-tight text-gray-900 lg:text-4xl lg:pb-4">{producto.titulo}</h5>
                    </div>
                </Card>
            ))
        };
    };

    const handleSelectedProduct = (id) => {
        navigate(`/Descripcion/${categorias}/${id}`);
    };

  return (
    <>
        <section className='lg:mt-12'>
            <div className='container mx-auto px-4'>
                <br />
                <br />
                <div className='ms-4 w-fit bg-white/50 rounded-md sm:ms-10 md:ms-16 lg:rounded-xl lg:ms-20 xl:ms-28 2xl:ms-36'>
                    <Link className='flex p-3' to={'/'}>
                        <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
                    </Link>
                </div>
                <div className='container mx-auto py-4 w-max lg:py-6 xl:py-8 2xl:py-10'>
                    {renderTitulo()}
                </div>
                <div className='flex flex-wrap justify-center grid grid-cols-2 sm:mx-10 md:mx-16 lg:gap-4 lg:mx-20 xl:grid-cols-3 xl:gap-6 xl:mx-28 2xl:gap-10 2xl:mx-36'>
                    {renderProductos()}
                </div>
            </div>
        </section>
        <br />
    </>
  )
}

export default Listado