'use client';

import { Footer } from 'flowbite-react';
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import React from 'react'
import { Link } from 'react-router-dom';

function FooterE() {
  return (
    <>

      <Footer className='rounded-none' container>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
              <Link to={'/'}>
                <Footer.Brand href="#" src="../../public/voltinela-logo.png" alt="Logo" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="Siguenos" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://www.linkedin.com/company/voltela/">LinkedIn</Footer.Link>
                  <Footer.Link href="#">Instagram</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
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
              <Footer.Icon href="https://www.linkedin.com/company/voltela/" icon={BsLinkedin} />
              <Footer.Icon href="#" icon={BsInstagram} />
              <Footer.Icon href="https://github.com/Erny23" icon={BsGithub} />
            </div>
          </div>
        </div>
      </Footer>
    </>
  )
}

export default FooterE