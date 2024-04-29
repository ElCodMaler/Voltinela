import { useState, useEffect } from 'react';

const useCarrito = () => {
  const [productosCarrito, setCarrito] = useState([]);

  useEffect(() => {
    const productosGuardados = localStorage.getItem('productosCarrito');
    if (productosGuardados) {
      setCarrito(JSON.parse(productosGuardados));
    }
  }, []);

  const guardarProducto = (nuevoProducto) => {
    setCarrito([...productosCarrito, nuevoProducto]);
    localStorage.setItem('productosCarrito', JSON.stringify([...productosCarrito, nuevoProducto]));
  };

  const eliminarProducto = (idProducto) => {
    const productosActualizados = productosCarrito.filter((producto) => producto.id !== idProducto);
    setCarrito(productosActualizados);
    localStorage.setItem('productosCarrito', JSON.stringify(productosActualizados));
  };

  return { productosCarrito , guardarProducto, eliminarProducto };
};

export default useCarrito;