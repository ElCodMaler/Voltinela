import React from "react";
import Listado from "../components/Listado";

function Products({productos}) {
  return (
    <>
        <Listado productos={productos}/>
    </>
  )
}

export default Products