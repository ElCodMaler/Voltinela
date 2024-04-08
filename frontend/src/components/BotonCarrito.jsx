import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'
import { FaCartShopping } from "react-icons/fa6";

const BotonCarrito = () => {
  return (
    <>
        <Link to={'/Voltinela/Carrito'}>
            <section className='fixed bottom-0 right-0 mx-5 my-5'>
                <Button className='rounded-full w-24 h-24 pt-3 focus:ring-0 lg:w-32 lg:h-32' style={{backgroundColor: '#84cc16'}}>
                    <FaCartShopping className='w-14 h-14 flex justify-center content-end lg:w-20 lg:h-20' />
                </Button>
            </section>
        </Link>
    </>
  )
}

export default BotonCarrito