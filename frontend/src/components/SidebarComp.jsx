'use client';
import React, { useState, useEffect } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import datos from '../dataBase/datos.json'

function SidebarComp() {

  const navigate = useNavigate();

  const routeIni = () => {
    navigate('/Voltinela');
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

  return (
    <>
        
        <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item icon={HiHome} onClick={() => routeIni()}>
                  Inicio
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiDuplicate} label="Categorias">
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
                <Sidebar.Item href="#" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    </>
  )
}

export default SidebarComp