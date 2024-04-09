'use client';
import React, { useState, useEffect } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook } from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import datos from '../dataBase/datos.json'

function SidebarComp({carrito}) {

  const navigate = useNavigate();

  const routeIni = () => {
    navigate('/Voltinela/');
    window.location.reload();
  };
  
  const handleSelect = (categoria) => {
    localStorage.setItem('categoria', categoria);
    navigate('/Voltinela/Productos');
    //console.log(localStorage.getItem('categoria'));
    window.location.reload();
    return false;
  };

  const allProducts = () => {
    localStorage.setItem('categoria', '');
    navigate('/Voltinela/Productos');
    window.location.reload();
    return false;
  };

  const routeNos = () => {
    navigate('/Voltinela/Nosotros');
    window.location.reload();
  };

  const productos = datos;
  const categoriasList = new Set();

  productos.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
  });

  const categorias = [...categoriasList];

  const eliminarProducto = (id) => {
    const carritoActualizado = carrito.filter((producto) => producto.id !== id);
    localStorage.setItem('carrito', JSON.stringify(carritoActualizado));
    window.location.reload();
  };

  const verCarrito = () => {
    console.log('Ver', JSON.parse(localStorage.getItem('carrito')));

    const carritoTabla = carrito.map((producto) => {
    
    return `
        <tr>
            <td><img src="${producto.imagen}" alt="${producto.imagen}" class="imgCarrito w-24"/></td>
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
  };

  return (
    <>
        
        <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item icon={HiHome} onClick={() => routeIni()}>
                  Inicio
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiDuplicate} label="Categorías">
                  {categorias.map((categoria) => (
                    <Sidebar.Item key={categoria.id} onClick={() => handleSelect(categoria)}>
                      {categoria}
                    </Sidebar.Item>
                  ))}
                    <Sidebar.Item onClick={() => allProducts()}>
                      Todos los Productos
                    </Sidebar.Item>
                  {/*<Sidebar.Item href="#">Respaldos</Sidebar.Item>
                  <Sidebar.Item href="#">Paneles solares</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 3</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 4</Sidebar.Item>*/}
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={AiOutlineUsergroupAdd} onClick={() => routeNos()}>
                  Nosotros
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingCart} onClick={() => verCarrito()}>
                  Ver Carrito
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={AiOutlineWhatsApp}>
                  Whatsapp
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiFillLinkedin}>
                  <a href='https://www.linkedin.com/company/voltela/'>
                    LinkedIn
                  </a>
                </Sidebar.Item>
                <Sidebar.Item href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" icon={AiFillFacebook}>
                  Facebook
                </Sidebar.Item>
                <Sidebar.Item href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
                <Sidebar.Item href="https://www.tiktok.com/@voltinela" icon={FaTiktok}>
                  TikTok
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    </>
  )
}

export default SidebarComp