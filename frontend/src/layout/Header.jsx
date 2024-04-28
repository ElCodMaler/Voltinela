import React, { useState, useEffect } from 'react'
import { Button, Navbar, Drawer } from 'flowbite-react'
import SidebarComp from '../components/SidebarComp'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6"

function Header({info, carrito, productos, handleLenguageEN, handleLenguageES}) {

  const [visible, setVisible] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const [ lenguage, setLenguage ] = useState("ES");

  const location = useLocation();

  let cantidad = carrito.length;

  const conterCarrito = () => {
    if (cantidad > 0) {
      return (
        <span className="absolute mb-5 ms-5 px-1.5 text-xs text-white font-semibold bg-[#81BC00] rounded-full sm:text-sm sm:ms-4 sm:mb-4 sm:px-2 md:text-base md:mb-6 lg:text-lg lg:ms-6 lg:mb-8 xl:ms-8 xl:mb-10">
          {cantidad}
        </span>
      )
    }
  }

  const logoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  };

  const handleChange = () => {
    if (lenguage === "ES") {
      handleLenguageEN();
      setLenguage("EN");
    } else {
      handleLenguageES();
      setLenguage("ES");
    }
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        <header className={`${visible ? 'bg-[#81bc00]/80 backdrop-blur' : 'bg-[#81bc00]'} fixed top-0 left-0 right-0 z-30`}>
          <Navbar className="bg-transparent mx-4 my-4 px-6 py-0 sm:mx-10 md:mx-16 md:my-6 lg:px-8 lg:py-2 lg:mx-20 lg:mt-8" fluid rounded>
            <Navbar.Brand href="#" onClick={logoClick}>
              <Link to={'/'}>
                <img src="voltinela-logo-blanco.png" className="mr-3 h-5 sm:h-6 md:h-8 lg:h-10 2xl:h-12" alt="Logo" />
              </Link>
            </Navbar.Brand>
            <nav className="text-center flex flex-wrap">
              <label class="inline-flex items-center cursor-pointer me-2">
                <input type="checkbox" value="" class="sr-only peer" onChange={handleChange} />
                <div class="relative flex-row content-center w-11 h-6 lg:w-[4.9rem] lg:h-10 lg:after:h-9 lg:after:w-9 bg-gray-200 text-black peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#81cc00]">
                  <div className='flex flex-row justify-between items-center mx-1 lg:mx-3'>
                    <span class="text-sm font-medium text-white lg:text-lg">EN</span>
                    <span class="text-sm font-medium text-[#363636] lg:text-lg">ES</span>
                  </div>
                </div>
              </label>
              <Link className='my-auto flex flex-col-reverse' to={'/Carrito'}>
                <FaCartShopping className='text-2xl text-white md:text-3xl lg:text-4xl 2xl:text-5xl' />
                {conterCarrito()}
              </Link>
              <Button className="px-0 py-0 focus:ring-0" onClick={() => setIsOpen(true)}>
                  <HiMenuAlt2 className="size-8 sm:size-8 md:size-12 lg:size-16 xl:size-12 2xl:size-16" name='menu-alt-left' color='#ffffff'></HiMenuAlt2>
              </Button>
            </nav>
          </Navbar>

          <Drawer className='w-full bg-[#363636]/75 backdrop-blur-sm' open={isOpen} onClose={handleClose} position="right">
            <Drawer.Header titleIcon={() => <>
              <Link to={'/'}>
                <img src="voltinela-logo-blanco.png" className="mt-5 ms-3 h-5 sm:h-6 md:h-8 lg:h-10 lg:mt-12 lg:ms-14 xl:h-12 xl:mt-6 xl:ms-24 2xl:h-14 2xl:ms-36" alt="Logo" />
              </Link></>} />
            <Drawer.Items>
              <SidebarComp info={info} carrito={carrito} productos={productos} handleClose={handleClose} />
            </Drawer.Items>
            </Drawer>
        </header>
    </>
  )
}

export default Header