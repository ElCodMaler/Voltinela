import React from 'react'
import ReactDOM from 'react-dom/client'
import Listado from '../components/Listado'

function Products({productos}) {
  return (
    <>

        <Listado Productos={productos}/>

    </>
  )
}

export default Products