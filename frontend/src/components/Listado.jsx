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
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full lg:text-4xl' style={{backgroundColor:'#84cc16', boxShadow: '0px 3px 20px -2px black'}}>Productos</h3>
        } else {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full lg:text-4xl' style={{backgroundColor:'#84cc16', boxShadow: '0px 3px 20px -2px black'}}>{categorias}</h3>
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
        navigate(`/Descripcion/${id}`);
    };

  return (
    <>
        <br />
        <br />
        <br />
        <section className='lg:py-20'>
            <div className='container mx-auto px-4'>
                <div className='ms-4 w-fit bg-white/30 rounded-md'>
                    <Link className='flex p-3' to={'/'}>
                        <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
                    </Link>
                </div>
                <div className='container mx-auto py-4 w-max'>
                    {renderTitulo()}
                </div>
                <div className='flex flex-wrap justify-center grid grid-cols-2'>
                    {renderProductos()}
                </div>
            </div>
        </section>
        <br />
    </>
  )
}

export default Listado