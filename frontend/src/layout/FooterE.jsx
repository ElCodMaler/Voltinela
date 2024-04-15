import { Footer } from 'flowbite-react';
import { BsLinkedin, BsGithub, BsInstagram, BsFacebook, BsTiktok } from 'react-icons/bs';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function FooterE() {

    const navigate = useNavigate();

    function handleClick(e) {
      const id = e.target.id;
      localStorage.setItem('categoria', id);
      navigate('/Voltinela/Productos');
      return false;
    };
    
  return (
    <>
      <Footer className='rounded-none' container>
        <div className="w-full">
          <div className="grid w-full">
            <div className='py-0 sm:py-2 md:py-3'>
              <Link to={'/Voltinela/'}>
                <Footer.Brand href="#" src="voltinela-logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-4 md:grid-cols-6 md:gap-0 lg:gap-10">
              <div>
                <Footer.Title className='lg:text-lg' title="Siguenos" />
                <Footer.LinkGroup className='lg:text-lg' col>
                  <Footer.Link href="https://www.linkedin.com/company/voltinela/">LinkedIn</Footer.Link>
                  <Footer.Link href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d">Facebook</Footer.Link>
                  <Footer.Link href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr">Instagram</Footer.Link>
                  <Footer.Link href="https://www.tiktok.com/@voltinela">TikTok</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='lg:text-lg' title="Productos" />
                <Footer.LinkGroup className='lg:text-lg' col onClick={handleClick}>
                  <Footer.Link id='Estación Portátil de Poder'>Estación Portatil de Poder</Footer.Link>
                  <Footer.Link id='Paneles solares'>Paneles Solares</Footer.Link>
                  <Footer.Link id='Servicios'>Servicios</Footer.Link>
                  <Footer.Link id='Baterías / Inversores'>Baterías/Inversores</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='lg:text-lg' title="Programas" />
                <Footer.LinkGroup className='lg:text-lg' col>
                  <Footer.Link to={"/Voltinela/InvitaYGana"}>Invita y Gana</Footer.Link>
                  <Footer.Link to={"/Voltinela/Embajadores"}>Embajadores</Footer.Link>
                  <Footer.Link to={"/Voltinela/Instala+"}>Instala+</Footer.Link>
                  <Footer.Link to={"/Voltinela/Carreras"}>Carreras</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='lg:text-lg' title="Soporte" />
                <Footer.LinkGroup className='lg:text-lg' col>
                  <Footer.Link to={"/Voltinela/"}>Preguntas</Footer.Link>
                  <Footer.Link to={"/Voltinela/"}>Contactos</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='lg:text-lg' title="Nosotros" />
                <Footer.LinkGroup className='lg:text-lg' col>
                  <Footer.Link to={"/Voltinela/Nosotros"}>Visión</Footer.Link>
                  <Footer.Link to={"/Voltinela/Nosotros"}>Misión</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title className='lg:text-lg' title="Legal" />
                <Footer.LinkGroup className='lg:text-lg' col>
                  <Footer.Link href="#">Politicas de privacidad</Footer.Link>
                  <Footer.Link href="#">Terminos &amp; Condiciones</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Voltinela™" year={2024} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="https://www.linkedin.com/company/voltinela/" icon={BsLinkedin} />
              <Footer.Icon href="https://www.facebook.com/share/7UHpYKb5yMqCAifP/?mibextid=LQQJ4d" icon={BsFacebook} />
              <Footer.Icon href="https://www.instagram.com/voltinela?igsh=MXNza3R0cnJienBhdg%3D%3D&utm_source=qr" icon={BsInstagram} />
              <Footer.Icon href="https://www.tiktok.com/@voltinela" icon={BsTiktok} />
              <Footer.Icon href="https://github.com/Erny23" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FooterE