'use client';
import React, { useState, useEffect } from 'react'
import { Button, Navbar } from 'flowbite-react'
import SidebarComp from '../components/SidebarComp'
import { Link } from 'react-router-dom'

function Header() {

  const [visible, setVisible] = useState(false);

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
        <header className=''>

            <Navbar className={`${visible ? 'block' : 'hidden'} fixed top-0 left-0 right-0 z-30 mx-4 my-4 px-6 py-1 bg-white/30 rounded-full md:mx-24 lg:mx-28 md:my-6`} fluid rounded>
              <Navbar.Brand href="#">
                <Link to={'/'}>
                  <img src="../../public/voltinela-logo-blanco.png" className="mr-3 h-4 sm:h-6" alt="Logo" />
                  {/*<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Voltinela</span>*/}
                </Link>
              </Navbar.Brand>
              <div className="text-center">
                <Button className="px-0 py-0 focus:ring-0" type="button" data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                    <box-icon name='menu-alt-left' color='#ffffff' size="md"></box-icon>
                </Button>
              </div>
            </Navbar>

            <div id="drawer-navigation" className="fixed top-0 left-0 z-40 w-full h-screen p-4 overflow-y-auto transition-transform translate-x-full dark:bg-gray-800" tabindex="-1" aria-labelledby="drawer-navigation-label" style={{backgroundColor:'#00000082',backdropFilter: "blur(4px)"}}>
                <img src="voltinela-logo-blanco.png" className="mr-3 h-6 sm:h-9" alt="Logo" />
                <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span className="sr-only">Close menu</span>
                </button>
              <div className="py-4 overflow-y-auto"> 
                <SidebarComp/>
              </div>
            </div>

        </header>
    </>
  )
}

export default Header