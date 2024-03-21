'use client';
import React, { useState, useEffect } from 'react'
import { Sidebar } from 'flowbite-react';
import { HiDuplicate, HiHome } from 'react-icons/hi';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineUsergroupAdd, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import datos from '../dataBase/datos.json'

function SidebarComp() {

  const [ categoriaSeleccionada, setCategoriaSeleccionada ] = useState('');
  
  const handleSelect = (categoria) => {
    setCategoriaSeleccionada(categoria);
    localStorage.setItem('categoria', categoria);
    //console.log(localStorage.getItem('categoria'));
    window.location.reload(); // Reload the page to update the selected category
    return false; // Prevent the default link behavior
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
                <Sidebar.Item href="#" icon={HiHome}>
                  <Link to='/'>Inicio</Link>
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiDuplicate} label="Categorias">
                  {categorias.map((categoria) => (
                    <Sidebar.Item href="#" key={categoria.id} onClick={() => handleSelect(categoria)}>
                      <Link to='Productos'>{categoria}</Link>
                    </Sidebar.Item>
                  ))}
                  {/*<Sidebar.Item href="#">Respaldos</Sidebar.Item>
                  <Sidebar.Item href="#">Paneles solares</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 3</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 4</Sidebar.Item>*/}
                </Sidebar.Collapse>
                <Sidebar.Item href="#" icon={AiOutlineUsergroupAdd}>
                  Nosotros
                </Sidebar.Item>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={AiOutlineWhatsApp}>
                  Whatsapp
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiFillFacebook}>
                  Facebook
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={AiOutlineTwitter}>
                  Twitter
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>

    </>
  )
}

export default SidebarComp