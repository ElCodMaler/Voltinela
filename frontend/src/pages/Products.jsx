import React from 'react'
import ReactDOM from 'react-dom/client'
import Listado from '../components/Listado'

function Products({productos}) {
  return (
    <>

        <Listado productos={productos} />

    </>
  )
}

export default Products