import React from 'react'
import DescripcionCont from '../components/DescripcionCont'

function Descripcion({ carrito, setCarrito }) {
  return (
    <>
      <DescripcionCont carrito={carrito} setCarrito={setCarrito} />
    </>
  )
}

export default Descripcion