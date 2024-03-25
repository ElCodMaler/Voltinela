import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, Tabs } from 'flowbite-react'
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function Descripcion() {

    const { id } = useParams();

    const productoSeleccionado = productos.find((p) => p.id === id);

    const puertosDeSalida = productoSeleccionado.puertosDeSalida;

    const listaPuertosSalida = puertosDeSalida.map((puerto) => {
      return {
        tipo: puerto[0].split(":")[0].trim(),
        descripcion: puerto[0].split(":")[1].trim(),
      };
    });

  return (
    <>
        <main id='descripcion'>

            <section className='container mx-auto px-4 py-5'>

                <div className='titulo container mx-auto w-max py-3'>
                    <h3 className='text-2xl text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>{productoSeleccionado.titulo}</h3>
                </div>

                <br />

                <div className='flex flex-col items-center'>

                    <div className="grid grid-cols-1 w-full items-center bg-white rounded-lg shadow md:grid-cols-2 md:w-auto shadow-xl">

                      <img className="h-96 w-full object-cover rounded-t-lg md:h-full md:w-auto md:rounded-none md:rounded-s-lg" src={`../../public/${productoSeleccionado.imagen}`} alt={`../../public/${productoSeleccionado.imagen}`} />

                      <div className="flex flex-col justify-between p-4 leading-normal md:px-12">
    
                          <h5 className="mb-2 text-2xl font-bold tracking-tight md:pb-3">
                            {productoSeleccionado.tituloTecnico}
                          </h5>

                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {productoSeleccionado.descripcion}
                          </p>

                        <Tabs aria-label="Tabs with underline" style="underline">
                          <Tabs.Item active title="Bateria" icon={HiUserCircle}>
                            <ul>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Capacidad: </span>{productoSeleccionado.bateriaCapacidad}
                              </li>
                              <li>
                                <span className="font-medium text-gray-800 dark:text-white">Ciclo de vida: </span>{productoSeleccionado.bateriaDuraion}
                              </li>
                            </ul>
                          </Tabs.Item>
                          <Tabs.Item title="Puertos de carga" icon={MdDashboard}>
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
                          <Tabs.Item title="Puertos de salida" icon={HiAdjustments}>
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
                          <Tabs.Item title="Otros" icon={HiClipboardList}>
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

                </div>

            </section>
        </main>
    </>
  )
}

export default Descripcion