import React from 'react'
import DescripcionCont from '../components/DescripcionCont'

function Descripcion({ carrito, setCarrito, productos}) {
  return (
    <>
      <DescripcionCont carrito={carrito} setCarrito={setCarrito} productos={productos} />
    </>
  )
}

export default Descripcion