import React, { useState, useEffect } from 'react'
import { Button, Navbar } from 'flowbite-react'
import SidebarComp from '../components/SidebarComp'
import { Link, useLocation } from 'react-router-dom'
import { HiMenuAlt2 } from "react-icons/hi";
import { FaCartShopping } from "react-icons/fa6"

function Header({carrito, productos}) {

  let cantidad = carrito.length;

  const [visible, setVisible] = useState(false);

  const [close, setClose] = useState(false);

  const location = useLocation();

  const logoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo(0, 0);
    }
  };

  const handleClose = () => {
    setClose(false);
  };

  const handleOpen = () => {
    setClose(true);
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (scrolled < 150) {
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
        <header>
          <Navbar className={`${visible ? 'bgNav bg-white/50' : 'bg-transparent'} fixed top-0 left-0 right-0 z-30 mx-4 my-4 px-6 py-0 rounded-full sm:mx-10 md:mx-16 md:my-6 lg:px-8 lg:py-2 lg:mx-20 lg:mt-12`} fluid rounded>
            <Navbar.Brand href="#" onClick={logoClick}>
              <Link to={'/'}>
                <img src="voltinela-logo-blanco.png" className="mr-3 h-5 sm:h-6 md:h-8 lg:h-10 xl:h-6 2xl:h-8" alt="Logo" />
              </Link>
            </Navbar.Brand>
            <nav className="text-center flex flex-wrap">
              <Link className='my-auto' to={'/Carrito'}>
                {/**contador del carrito */}
                <FaCartShopping className='text-2xl text-white md:text-3xl lg:text-4xl xl:text-2xl 2xl:text-3xl' />
                <span className="top-0 start-7 absolute w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full">
                  {cantidad}
                </span>

              </Link>
              <Button className={`${close ? '' : 'transform-none'} px-0 py-0 focus:ring-0`} onClick={() => handleOpen()} type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                  <HiMenuAlt2 className="size-8 sm:size-8 md:size-12 lg:size-16 xl:size-8 2xl:size-10" name='menu-alt-left' color='#ffffff'></HiMenuAlt2>
              </Button>
            </nav>
          </Navbar>

          <div id="drawer-navigation" className={`${close ? 'transform-none' : ''} fixed top-0 left-0 z-40 w-full h-screen p-8 overflow-y-auto transition-transform translate-x-full lg:p-16`} tabindex="-1" aria-labelledby="drawer-navigation-label" style={{backgroundColor:'#00000082',backdropFilter: "blur(4px)"}}>
              <img src="voltinela-logo-blanco.png" className="mr-3 h-6 sm:h-9 lg:h-16" alt="Logo" />
              <button onClick={() => handleClose()} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                  <svg aria-hidden="true" className="w-8 h-8 lg:w-16 lg:h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span className="sr-only">Close menu</span>
              </button>
            <div className="py-4 overflow-y-auto"> 
              <SidebarComp carrito={carrito} productos={productos} handleClose={handleClose} />
            </div>
          </div>
        </header>
    </>
  )
}

export default Header