import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Carousel } from "flowbite-react"
import { Tabs } from 'flowbite-react'
import { AiFillTool, AiFillThunderbolt, AiOutlinePoweroff, AiOutlineUsb, AiOutlineArrowLeft } from 'react-icons/ai'
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Descripcion() {

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
    navigate('/Productos');
    window.location.reload();
  };

  return (
    <>
        <main id='descripcion'>

            <section className='container mx-auto px-4 py-5'>

              <Link to={'/Productos'} onClick={() => handleBack()}>
                <div className='w-fit p-3 bg-white/30 rounded-md'>
                    <a style={{color:'white'}}><AiOutlineArrowLeft/></a>
                </div>
              </Link>

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
                  {/*imagenesProducto && (
                    <Carousel>
                      {imagenesProducto.map((imagenProducto, index) => (
                        <Carousel.Item key={index}>
                          <img src={imagenProducto} alt={imagenProducto.titulo} />
                        </Carousel.Item>
                      ))}
                    </Carousel>
                  )*/}
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

                        <Tabs aria-label="Tabs with underline" style="underline">
                          <Tabs.Item active title="Bateria" icon={AiFillThunderbolt}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Capacidad: </span>{productoSeleccionado.bateriaCapacidad}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Ciclo de vida: </span>{productoSeleccionado.bateriaDuraion}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de carga" icon={AiOutlinePoweroff}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">AC: </span>{productoSeleccionado.entradaCargaAC}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Auto: </span>{productoSeleccionado.entradaCargaAuto}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Solar: </span>{productoSeleccionado.entradaCargaSolar}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de salida" icon={AiOutlineUsb}>
                            <ul>
                              {listaPuertosSalida.map((puerto) => {
                                return (
                                  <>
                                    <li key={puerto.tipo}>
                                      <span className="font-medium text-gray-800 dark:text-white">{puerto.tipo}: </span>{puerto.descripcion}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Otros" icon={AiFillTool}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Peso: </span>{productoSeleccionado.peso}kg
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Temperaturas: </span>{productoSeleccionado.temperaturas}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Proteccion: </span>{productoSeleccionado.proteccion}
                              </li>
                            </ul>
                          </Tabs.Item>
                        </Tabs>
                      
                      </div>
                </div>

                    {/*<div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow md:grid-cols-2 md:w-auto shadow-xl">

                      <img className="h-96 w-full object-cover rounded-t-lg md:h-full md:w-auto md:rounded-none md:rounded-s-lg" src={`../../public/${productoSeleccionado.imagen}`} alt={`../../public/${productoSeleccionado.imagen}`} />

                      <div className="flex flex-col justify-between p-4 leading-normal md:px-12">
    
                          <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                            {productoSeleccionado.tituloTecnico}
                          </h5>

                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {productoSeleccionado.descripcion}
                          </p>

                        <Tabs aria-label="Tabs with underline" style="underline">
                          <Tabs.Item active title="Bateria" icon={AiFillThunderbolt}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Capacidad: </span>{productoSeleccionado.bateriaCapacidad}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Ciclo de vida: </span>{productoSeleccionado.bateriaDuraion}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de carga" icon={AiOutlinePoweroff}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">AC: </span>{productoSeleccionado.entradaCargaAC}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Auto: </span>{productoSeleccionado.entradaCargaAuto}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Solar: </span>{productoSeleccionado.entradaCargaSolar}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de salida" icon={AiOutlineUsb}>
                            <ul>
                              {listaPuertosSalida.map((puerto) => {
                                return (
                                  <>
                                    <li key={puerto.tipo}>
                                      <span className="font-medium text-gray-800 dark:text-white">{puerto.tipo}: </span>{puerto.descripcion}
                                    </li>
                                  </>
                                )
                              })}
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Otros" icon={AiFillTool}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Peso: </span>{productoSeleccionado.peso}kg
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Temperaturas: </span>{productoSeleccionado.temperaturas}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Proteccion: </span>{productoSeleccionado.proteccion}
                              </li>
                            </ul>
                          </Tabs.Item>
                        </Tabs>
                      
                      </div>

                  </div>*/}

                </div>

            </section>
        </main>
    </>
  )
}

export default Descripcion