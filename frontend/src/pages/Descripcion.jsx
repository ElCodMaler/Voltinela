import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Carousel, Button, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import { AiFillTool, AiFillThunderbolt, AiOutlinePoweroff, AiOutlineUsb, AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Descripcion({ carrito, setCarrito }) {

  const navigate = useNavigate();

  const { id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === id);
  
  const imagenesProducto = productoSeleccionado.imagenes;
  
  const datosElectricos = productoSeleccionado.especificacionesElectricas;
  
  const listaDatosElectricos = datosElectricos.map((datElec) => {
    
    return {
      tipo: datElec[0].split(":")[0].trim(),
      descripcion: datElec[0].split(":")[1].trim(),
    };
  });

  const datosTecnicos = productoSeleccionado.especificacionesTecnicas;

  const listaDatosTecnicos = datosTecnicos.map((datTec) => {
  
    return {
      tipo: datTec[0].split(":")[0].trim(),
      descripcion: datTec[0].split(":")[1].trim(),
    };
  });

  const datosVarios = productoSeleccionado.otros;

  const listaDatosVarios = datosVarios.map((datVar) => {
  
    return {
      tipo: datVar[0].split(":")[0].trim(),
      descripcion: datVar[0].split(":")[1].trim(),
    };
  });

  const handleBack = () => {
    navigate('/Voltinela/Productos');
    //window.location.reload();
  };

  const handleAddCar = () => {
    const prod = productoSeleccionado;
    if (!carrito.includes(prod)) {
      setCarrito([...carrito, prod]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
      console.log('Guardado', JSON.parse(localStorage.getItem('carrito')));
    };
    //setCarrito([...carrito, prod]);
    //localStorage.setItem('carrito', JSON.stringify(carrito));
    //console.log('Guardado', JSON.parse(localStorage.getItem('carrito')));
    console.log(prod.id);
  };

  /*useEffect(() => {
    renderAccordion();
  }, []);*/

  return (
    <>
        <main id='descripcion'>

            <section className='container mx-auto px-4 py-5'>

              <div className='w-fit p-3 bg-white/30 rounded-md'>
                <Link className='flex' to={'/Voltinela/Productos'} onClick={() => handleBack()}>
                  <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
              </div>

                <br />

                <div className='flex flex-col items-center'>

                  <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow md:grid-cols-2 md:w-auto shadow-xl">
                    <div className="h-72 sm:h-96 md:h-80 lg:h-96 xl:h-svh">

                      <Carousel>
                        {imagenesProducto.map((imagenProducto, index) => (
                          <div key={index}>
                            <img src={imagenProducto} alt={imagenProducto.titulo} />
                          </div>
                        ))}
                      </Carousel>

                    </div>
                    <div className="flex flex-col justify-between p-4 leading-normal md:px-12">

                      <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                        {productoSeleccionado.titulo}
                      </h5>
                    
                      <h6 className="mb-2 text-xl font-semibold tracking-tight md:pb-3">
                        {productoSeleccionado.tituloTecnico}
                      </h6>
                    
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {productoSeleccionado.descripcion}
                      </p>
                    
                      <h6 className="mb-2 text-lg font-semibold tracking-tight">
                        Especificaciones:
                      </h6>

                      <Accordion collapseAll>
                        <AccordionPanel>
                          <AccordionTitle>
                            <div className='flex flex-wrap'><AiFillThunderbolt className='mt-1 me-2' /> Electricas</div>
                          </AccordionTitle>
                          <AccordionContent>
                          {listaDatosElectricos.map((datElec) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datElec.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datElec.tipo}: </span>{datElec.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                          <AccordionTitle>
                            <div className='flex flex-wrap'><AiOutlinePoweroff className='mt-1 me-2' /> Tecnicas</div>
                          </AccordionTitle>
                          <AccordionContent>
                          {listaDatosTecnicos.map((datTec) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datTec.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datTec.tipo}: </span>{datTec.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </AccordionContent>
                        </AccordionPanel>
                        <AccordionPanel>
                          <AccordionTitle>
                            <div className='flex flex-wrap'><AiFillTool className='mt-1 me-2' /> Otros</div>
                          </AccordionTitle>
                          <AccordionContent>
                          {listaDatosVarios.map((datVar) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datVar.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datVar.tipo}: </span>{datVar.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </AccordionContent>
                        </AccordionPanel>
                      </Accordion>
                      
                      {/*<div id="accordion-open" data-accordion="open">
                        <h2 id="accordion-open-heading-1">
                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-0 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                            <span className="flex items-center">
                              <svg className="w-7 h-7 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <AiFillThunderbolt />
                              </svg> Eléctricas
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                          </button>
                        </h2>
                        <div id="accordion-open-body-1" className="hidden" aria-labelledby="accordion-open-heading-1">
                          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                          {listaDatosElectricos.map((datElec) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datElec.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datElec.tipo}: </span>{datElec.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </div>
                        </div>
                        <h2 id="accordion-open-heading-2">
                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-0 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                            <span className="flex items-center">
                              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <AiOutlinePoweroff />
                              </svg>Tecnicas
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                          </button>
                        </h2>
                        <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                          <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                          {listaDatosTecnicos.map((datTec) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datTec.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datTec.tipo}: </span>{datTec.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </div>
                        </div>
                        <h2 id="accordion-open-heading-3">
                          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-0 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                            <span className="flex items-center">
                              <svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <AiFillTool />
                              </svg>Otros
                            </span>
                            <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                          </button>
                        </h2>
                        <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                          <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                          {listaDatosVarios.map((datVar) => {
                            return (
                              <>
                                <ul className='list-none list-inside'>
                                  <li key={datVar.tipo}>
                                    <span className="font-bold text-gray-800 dark:text-white">{datVar.tipo}: </span>{datVar.descripcion}
                                  </li>
                                </ul>
                                <br />
                              </>
                            )
                          })}
                          </div>
                        </div>
                      </div>*/}
                      <div className='flex flex-col justify-center py-5'>
                        <Button className='focus:ring-0' pill style={{backgroundColor:'#84cc16'}} onClick={handleAddCar}>
                          <HiShoppingCart className='mr-2 h-7 w-7' />
                          <p className='text-base'>Añadir al carrito</p>
                        </Button>
                        <br />
                        <Button className='border-2 focus:ring-0' pill style={{color:'#84cc16', borderColor:'#84cc16'}}>
                          <AiOutlineWhatsApp className='mr-2 h-7 w-7' />
                          <p className='text-base'>Contactar</p>
                        </Button>
                      </div>
                    </div>

                  </div>

                </div>

            </section>
        </main>
    </>
  )
}

export default Descripcion