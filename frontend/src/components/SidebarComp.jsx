'use client';
import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiDuplicate, HiHome, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';
import { AiFillFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineUsergroupAdd, AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function SidebarComp() {
  return (
    <>
        
        <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items>
              <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiHome}>
                  <Link to='/'>Inicio</Link>
                </Sidebar.Item>
                <Sidebar.Collapse icon={HiDuplicate} label="Categorias">
                  <Sidebar.Item href="#">Respaldos</Sidebar.Item>
                  <Sidebar.Item href="#">Paneles solares</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 3</Sidebar.Item>
                  <Sidebar.Item href="#">Categorias 4</Sidebar.Item>
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