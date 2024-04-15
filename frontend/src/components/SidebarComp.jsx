import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom';
import datos from '../dataBase/datos.json'

function SidebarComp({ handleClose }) {

  const navigate = useNavigate();
  
  const handleSelect = (categoria) => {
    localStorage.setItem('categoria', categoria);
    navigate('/Voltinela/Productos');
    handleClose();
    return false;
  };

  const allProducts = () => {
    localStorage.setItem('categoria', '');
    navigate('/Voltinela/Productos');
    handleClose();
    return false;
  };

  const routeNos = () => {
    navigate('/Voltinela/Nosotros');
    //window.location.reload();
  };

  const productos = datos;
  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];



  return (
    <>
      <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Link to={'/Voltinela/'} onClick={() => handleClose()}>
                  <Sidebar.Item className='lg:text-4xl lg:py-6' icon={HiHome}>
                    Inicio
                  </Sidebar.Item>
                </Link>
                <Sidebar.Collapse className='lg:text-4xl lg:py-6' icon={HiDuplicate} label="Categorías">
                  {categorias.map((categoria) => (
                    <Link to={'/Voltinela/Productos'}>
                      <Sidebar.Item className='lg:text-4xl lg:py-6' key={categoria.id} onClick={() => handleSelect(categoria)}>
                        {categoria}
                      </Sidebar.Item>
                    </Link>
                  ))}
                    <Sidebar.Item className='lg:text-4xl lg:py-6' onClick={() => allProducts()}>
                      Todos los Productos
                    </Sidebar.Item>
                </Sidebar.Collapse>
                <Link to={'/Voltinela/Nosotros'} onClick={() => handleClose()}>
                  <Sidebar.Item className='lg:text-4xl lg:py-6' href="#" icon={AiOutlineUsergroupAdd}>
                    Nosotros
                  </Sidebar.Item>
                </Link>
                <Link to={'/Voltinela/Carrito'} onClick={() => handleClose()}>
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