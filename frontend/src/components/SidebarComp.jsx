import React from 'react'
import { Sidebar } from 'flowbite-react'
import { HiDuplicate, HiHome } from 'react-icons/hi'
import { AiFillLinkedin, AiOutlineInstagram, AiOutlineUsergroupAdd, AiOutlineWhatsApp, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import { FaXTwitter } from "react-icons/fa6"
import { FaTiktok } from 'react-icons/fa'
import { HiShoppingCart } from "react-icons/hi"
import { FaShop } from "react-icons/fa6"
import { BiSolidShoppingBags } from "react-icons/bi"
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
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => {handleSelect(categorias[0]); handleClose()}}>
          {categorias[0]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => {handleSelect(categorias[1]); handleClose()}}>
          {categorias[1]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => {handleSelect(categorias[2]); handleClose()}}>
          {categorias[2]}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => {handleSelect(categorias[3]); handleClose()}}>
          {info.bateriasInvesores}
        </Sidebar.Item>
        <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => {allProducts(); handleClose()}}>
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
        <span className="ms-2 px-1.5 text-xs text-white font-semibold bg-lime-500 rounded-full sm:text-sm sm:px-2 md:text-lg lg:text-xl xl:text-2xl">
          {cantidad}
        </span>
      )
    }
  }

  return (
    <>
      <Sidebar className='w-100' aria-label="Sidebar with multi-level dropdown example">
            <Sidebar.Items className='lg:mx-20 xl:mx-32 2xl:mx-44'>
              <Sidebar.ItemGroup>
                <Link to={'/'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' icon={HiHome}>
                    {info.inicio}
                  </Sidebar.Item>
                </Link>
                <Sidebar.Collapse className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' icon={BiSolidShoppingBags} label={info.productos}>
                  {renderCategorias()}
                </Sidebar.Collapse>
                <Sidebar.Collapse className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' icon={FaShop} label={info.mayorista}>
                  <Link to={'/Detal'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.detal}
                    </Sidebar.Item>
                  </Link>
                  <Link to={'/Distribuidor'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.distribuidor}
                    </Sidebar.Item>
                  </Link>
                </Sidebar.Collapse>
                <Sidebar.Collapse className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' icon={HiDuplicate} label={info.programas}>
                  <Link to={'/InvitaYGana'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.invitaGana}
                    </Sidebar.Item>
                  </Link>
                  <Link to={'/Embajadores'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.embajadores}
                    </Sidebar.Item>
                  </Link>
                    <Link to={'/Instala+'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.instalacion}
                    </Sidebar.Item>
                  </Link>
                  <Link to={'/Carreras'}>
                    <Sidebar.Item className='text-white hover:bg-lime-500 lg:text-xl lg:py-4' onClick={() => handleClose()}>
                      {info.carreras}
                    </Sidebar.Item>
                  </Link>
                </Sidebar.Collapse>
                <Link to={'/Nosotros'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="#" icon={AiOutlineUsergroupAdd}>
                    {info.nosotros}
                  </Sidebar.Item>
                </Link>
                <Link to={'/Carrito'} onClick={() => handleClose()}>
                  <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="#" icon={HiShoppingCart}>
                    {info.carrito}
                    {conterCarrito2()}
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
              <Sidebar.ItemGroup className='lg:mt-8'>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="https://wa.me/584127351051" icon={AiOutlineWhatsApp}>
                  Whatsapp
                </Sidebar.Item>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" icon={AiFillFacebook}>
                  Facebook
                </Sidebar.Item>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" icon={AiOutlineInstagram}>
                  Instagram
                </Sidebar.Item>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="#" icon={AiFillYoutube}>
                    YouTube
                </Sidebar.Item>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="https://www.linkedin.com/company/voltela/" icon={AiFillLinkedin}>
                    LinkedIn
                </Sidebar.Item>
                <Sidebar.Item className='text-white font-semibold hover:bg-lime-500 md:text-xl lg:text-2xl xl:text-3xl lg:py-4' href="https://www.tiktok.com/@voltinela" icon={FaTiktok}>
                  TikTok
                </Sidebar.Item>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    </>
  )
}

export default SidebarComp