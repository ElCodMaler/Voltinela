import React from 'react'
import { useParams } from 'react-router-dom'
import { Carousel } from "flowbite-react"
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function CarruselProductos() {

    const { id } = useParams();

    const productoSeleccionado = productos.find((p) => p.id === id);
    
    const imagenesProducto = productoSeleccionado.imagenes;

    const renderImagenesProductos = () => {
        return imagenesProducto.map((imagenProducto, index) => (
            <div key={index}>
              <img src={`../../public/${imagenProducto}`} alt={imagenProducto.titulo} />
            </div>
        ))
    };

  return (
    <>
        <Carousel>
            {renderImagenesProductos()}
        </Carousel>
    </>
  )
}

export default CarruselProductos