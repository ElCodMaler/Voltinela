'use client';

import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Listado(id) {

    const [selectedCategory, setSelectedCategory] = useState('');

    const navigate = useNavigate();

    const renderTitulo = () => {
        if (selectedCategory === '') {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16', boxShadow: '0px 3px 20px -2px black'}}>Productos</h3>
        } else {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16', boxShadow: '0px 3px 20px -2px black'}}>{selectedCategory}</h3>
        }
    };

    const renderProductos = () => {
        /*    console.log(selectedCategory);
            return productos.map((producto) => (
                <Card key={producto.id} id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" onClick={() => handleSelectedProduct(producto.id)}>
                    <img src={`../../public/${producto.imagen}`} alt={producto.titulo} />
                </Card>
            )
        )*/
        if (selectedCategory === '') {
            return productos.map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id} onClick={() => handleSelectedProduct(producto.id)}>
                    <img src={`../../public/${producto.imagen}`} alt={producto.titulo} />
                </Card>
            ))
        } else {
            return productos.filter(producto => producto.categoria === selectedCategory).map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id} onClick={() => handleSelectedProduct(producto.id)}>
                    <img src={`../../public/${producto.imagen}`} alt={producto.titulo} />
                </Card>
            ))
        };
    };

    const handleSelectedProduct = (id) => {
        navigate(`/Voltinela/Descripcion/${id}`);
    };

    useEffect(() => {
        setSelectedCategory(localStorage.getItem('categoria'));
    }, []);

  return (
    <>

        <section className='py-4'>
            <div className='ms-4 w-fit bg-white/30 rounded-md'>
                <Link className='flex p-3' to={'/Voltinela'}>
                    <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
            </div>
            <div className='container mx-auto py-4 w-max'>
                {renderTitulo()}
            </div>
            <div className='container mx-auto px-4'>
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