'use client';
import React, { useEffect } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import datos from '../dataBase/datos.json'

function SidebarComp({carrito, handleClose}) {

  const navigate = useNavigate();
  
  const handleSelect = (categoria) => {
    localStorage.setItem('categoria', categoria);
    //navigate('/Voltinela/Productos');
    handleClose();
    return false;
  };

  const allProducts = () => {
    localStorage.setItem('categoria', '');
    //navigate('/Voltinela/Productos');
    handleClose();
    return false;
  };

  const productos = datos;
  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];

  /*const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    window.location.reload();
  };

  const verCarrito = () => {
    console.log('Ver', JSON.parse(localStorage.getItem('carrito')));

    const carritoTabla = carrito.map((producto) => {
    
    return `
        <tr>
            <td><img src="../../public/${producto.imagen}" alt="${producto.imagen}" class="imgCarrito w-24"/></td>
            <td>${producto.titulo}</td>
            <td><button class="" onClick=${eliminarProducto(producto.id)}>Eliminar</button></td>
        </tr>
      `;
    }).join("");

    const tablaHTML = `
      <div class="text-center">
          <table class="table table-striped table-bordered table-hover table-sm tablaCarrito" >
          <thead class="table-dark">
              <tr>
              <th>Imagen</th>
              <th>Título</th>
              <th>Acciones</th>
              </tr>
          </thead>
          <tbody>
              ${carritoTabla}
          </tbody>
          </table>
      </div>
    `;

    Swal.fire({
      position: "top-center",
      title: "Carrito",
      html: tablaHTML,
      width: "800px", // Establece el ancho deseado aquí
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `<i class="fa fa-thumbs-up"></i> Great!`,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `<i class="fa fa-thumbs-down"></i>`,
      cancelButtonAriaLabel: "Thumbs down"
    });
  };*/

  useEffect(() => {
    
  });
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