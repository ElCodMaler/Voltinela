import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom'

function SidebarComp({info, carrito, handleClose, productos}) {

  const navigate = useNavigate();

  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];

  const renderCategorias = () => {
    return (
      <>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' onClick={() => {handleSelect(categorias[0]); handleClose()}}>
          {categorias[0]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' onClick={() => {handleSelect(categorias[1]); handleClose()}}>
          {categorias[1]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' onClick={() => {handleSelect(categorias[2]); handleClose()}}>
          {categorias[2]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' onClick={() => {handleSelect(categorias[3]); handleClose()}}>
          {info.bateriasInvesores}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' onClick={() => {allProducts(); handleClose()}}>
          {info.todosLosProductos}
        </Sidebar.Item>
      </>
    )
  };

  const handleSelect = (categorias) => {
    navigate(`/Productos/${categorias}`);
    return false;
  };

  const allProducts = () => {
    navigate(`/Productos/${'Todos'}`);
    return false;
  };

  let cantidad = carrito.length;

  const conterCarrito2 = () => {
    if (cantidad > 0) {
      return (
        <span className="ms-2 px-1.5 text-xs text-white font-semibold bg-lime-500 rounded-full sm:text-sm sm:px-2">
          {cantidad}
        </span>
      )
    }
  }

  return (
    <>
      <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to={'/'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' icon={HiHome}>
                    {info.inicio}
                  </Sidebar.Item>
                </Link>
                <Sidebar.Collapse className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' icon={HiDuplicate} label={info.categorias}>
                  {renderCategorias()}
                </Sidebar.Collapse>
                <Link to={'/Nosotros'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="#" icon={AiOutlineUsergroupAdd}>
                    {info.nosotros}
                  </Sidebar.Item>
                </Link>
                <Link to={'/Carrito'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="#" icon={HiShoppingCart}>
                    {info.carrito}
                    {conterCarrito2()}
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup className='lg:mt-8'>
                <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="https://wa.me/584127351051" icon={AiOutlineWhatsApp}>
                  Whatsapp
                </Sidebar.Item>
                <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="#" icon={AiFillLinkedin}>
                  <a href='https://www.linkedin.com/company/voltela/'>
                    LinkedIn
                  </a>
                </Sidebar.Item>
                <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" icon={AiFillFacebook}>
                  Facebook
                </Sidebar.Item>
                <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
                <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-4xl lg:py-6' href="https://www.tiktok.com/@voltinela" icon={FaTiktok}>
                  TikTok
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </>
  )
}

export default SidebarComp