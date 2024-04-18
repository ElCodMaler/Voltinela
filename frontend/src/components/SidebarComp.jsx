import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate, useParams } from 'react-router-dom';
import datos from '../dataBase/datos.json'

function SidebarComp({carrito, handleClose, productos}) {

  const navigate = useNavigate();

  //const productos = datos;
  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];

  const renderCategorias = () => {
    return (
      <>
        <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => handleSelect(categorias[0])}>
          {categorias[0]}
        </Sidebar.Item>
        <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => handleSelect(categorias[1])}>
          {categorias[1]}
        </Sidebar.Item>
        <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => handleSelect(categorias[2])}>
          {categorias[2]}
        </Sidebar.Item>
        <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => handleSelect(categorias[3])}>
          Baterías / Inversores
        </Sidebar.Item>
        <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => allProducts()}>
          Todos los Productos
        </Sidebar.Item>
      </>
    )
  };

  const handleSelect = (categorias) => {
    navigate(`/Productos/${categorias}`);
    handleClose();
    return false;
  };

  const allProducts = () => {
    navigate(`/Productos/${'Todos'}`);
    handleClose();
    return false;
  };

  return (
    <>
      <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to={'/'} onClick={() => handleClose()}>
                  <Sidebar.Item className='lg:text-4xl lg:py-6' icon={HiHome}>
                    Inicio
                  </Sidebar.Item>
                </Link>
                <Sidebar.Collapse className='lg:text-4xl lg:py-6' icon={HiDuplicate} label="Categorías">
                  {renderCategorias()}
                </Sidebar.Collapse>
                <Link to={'/Nosotros'} onClick={() => handleClose()}>
                  <Sidebar.Item className='lg:text-4xl lg:py-6' href="#" icon={AiOutlineUsergroupAdd}>
                    Nosotros
                  </Sidebar.Item>
                </Link>
                <Link to={'/Carrito'} onClick={() => handleClose()}>
                  <Sidebar.Item className='lg:text-4xl lg:py-6' href="#" icon={HiShoppingCart}>
                    Carrito
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup className='lg:mt-8'>
                <Sidebar.Item className='lg:text-4xl lg:py-6' href="https://wa.me/584127351051" icon={AiOutlineWhatsApp}>
                  Whatsapp
                </Sidebar.Item>
                <Sidebar.Item className='lg:text-4xl lg:py-6' href="#" icon={AiFillLinkedin}>
                  <a href='https://www.linkedin.com/company/voltela/'>
                    LinkedIn
                  </a>
                </Sidebar.Item>
                <Sidebar.Item className='lg:text-4xl lg:py-6' href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" icon={AiFillFacebook}>
                  Facebook
                </Sidebar.Item>
                <Sidebar.Item className='lg:text-4xl lg:py-6' href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
                <Sidebar.Item className='lg:text-4xl lg:py-6' href="https://www.tiktok.com/@voltinela" icon={FaTiktok}>
                  TikTok
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </>
  )
}

export default SidebarComp