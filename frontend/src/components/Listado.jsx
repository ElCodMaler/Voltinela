'use client';

import { Card } from 'flowbite-react';
import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom';
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Listado() {

    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        setSelectedCategory(localStorage.getItem('categoria'));
    }, []);

    //const filteredProducts = productos.filter(producto => producto.categoria === selectedCategory);

    const renderTitulo = () => {
        if (selectedCategory === '') {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>Productos</h3>
        } else {
            return <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full' style={{backgroundColor:'#84cc16'}}>{selectedCategory}</h3>
        }
    };

    const renderProductos = () => {
        if (selectedCategory === '') {
            return productos.map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id}>
                    <Link to={'#'}>
                        <img src={producto.imagen} alt={producto.titulo} />
                    </Link>
                </Card>
            ))
        } else {
            return productos.filter(producto => producto.categoria === selectedCategory).map((producto) => (
                <Card id={producto.id} className="m-2  bg-cover bg-no-repeat bg-center bg-white bg-blend-multiply shadow-xl" key={producto.id}>
                    <Link to={'#'}>
                        <img src={producto.imagen} alt={producto.titulo} />
                    </Link>
                </Card>
            ))
        };
    }

  return (
    <>

        <section className='py-4'>
            <div className='container py-4 mx-auto w-max shadow-xl'>
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