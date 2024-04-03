import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Carousel, Tabs, Button } from "flowbite-react"
import { AiFillTool, AiFillThunderbolt, AiOutlinePoweroff, AiOutlineUsb, AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import { HiShoppingCart } from "react-icons/hi"
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Descripcion({ carrito, setCarrito }) {

  const navigate = useNavigate();

  const { id } = useParams();
  
  const productoSeleccionado = productos.find((p) => p.id === id);
  
  const imagenesProducto = productoSeleccionado.imagenes;
  
  const puertosDeSalida = productoSeleccionado.puertosDeSalida;
  
  const listaPuertosSalida = puertosDeSalida.map((puerto) => {
    
    return {
      tipo: puerto[0].split(":")[0].trim(),
      descripcion: puerto[0].split(":")[1].trim(),
    };
  });

  const handleBack = () => {
    navigate('/Voltinela/Productos');
    window.location.reload();
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
                          <img src={`../../public/${imagenProducto}`} alt={imagenProducto.titulo} />
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

                        <div id="accordion-open" data-accordion="open">
                          <h2 id="accordion-open-heading-1">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-0 hover:bg-lime-400 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
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
                              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                              <p className="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
                            </div>
                          </div>
                          <h2 id="accordion-open-heading-2">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                              <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>Is there a Figma file available?</span>
                              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                              </svg>
                            </button>
                          </h2>
                          <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                              <p className="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                              <p className="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                            </div>
                          </div>
                          <h2 id="accordion-open-heading-3">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                              <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What are the differences between Flowbite and Tailwind UI?</span>
                              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                              </svg>
                            </button>
                          </h2>
                          <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                              <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                              <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                              <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                              <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                                <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                                <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        {/*<Tabs aria-label="Tabs with underline" style="underline">
                          <Tabs.Item active title="Bateria" icon={AiFillThunderbolt}>
                            <ul className='list-disc list-inside'>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Capacidad: </span>{productoSeleccionado.bateriaCapacidad}
                              </li>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Ciclo de vida: </span>{productoSeleccionado.cicloDeVidaBateria}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de carga" icon={AiOutlinePoweroff}>
                            <ul className='list-disc list-inside'>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">AC: </span>{productoSeleccionado.entradaCargaAC}
                              </li>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Auto: </span>{productoSeleccionado.entradaCargaAuto}
                              </li>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Solar: </span>{productoSeleccionado.entradaCargaSolar}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de salida" icon={AiOutlineUsb}>
                            <ul className='list-disc list-inside'>
                              {listaPuertosSalida.map((puerto) => {
                                return (
                                  <>
                                    <li key={puerto.tipo}>
                                      <span className="font-bold text-gray-800 dark:text-white">{puerto.tipo}: </span>{puerto.descripcion}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Otros" icon={AiFillTool}>
                            <ul className='list-disc list-inside'>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Peso: </span>{productoSeleccionado.peso}kg
                              </li>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Temperaturas: </span>{productoSeleccionado.temperaturas}
                              </li>
                              <li>
                                <span className="font-bold text-gray-800 dark:text-white">Proteccion: </span>{productoSeleccionado.proteccion}
                              </li>
                            </ul>
                          </Tabs.Item>
                        </Tabs>*/}

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