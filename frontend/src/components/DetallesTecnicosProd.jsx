import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import { AiFillTool, AiFillThunderbolt, AiOutlinePoweroff, AiOutlineUsb, AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function DetallesTecnicosProd() {

    const { id } = useParams();

    const productoSeleccionado = productos.find((p) => p.id === id);

    const datosElectricos = productoSeleccionado.especificacionesElectricas;
  
    const listaDatosElectricos = datosElectricos.map((datElec) => {
      return {
        tipo: datElec[0].split(":")[0].trim(),
        descripcion: datElec[0].split(":")[1].trim(),
      };
    });

    const renderListaDatosElectricos = () => {
      return listaDatosElectricos.map((datElec) => (
        <li className='py-3' key={datElec.tipo}>
              <span className="font-bold text-gray-800 dark:text-white">{datElec.tipo}: </span>{datElec.descripcion}
        </li>
      ))
    };

    const datosTecnicos = productoSeleccionado.especificacionesTecnicas;

    const listaDatosTecnicos = datosTecnicos.map((datTec) => {
      return {
        tipo: datTec[0].split(":")[0].trim(),
        descripcion: datTec[0].split(":")[1].trim(),
      };
    });

    const renderListaDatosTecnicos = () => {
      return listaDatosTecnicos.map((datTec) => (
        <li className='py-3' key={datTec.tipo}>
              <span className="font-bold text-gray-800 dark:text-white">{datTec.tipo}: </span>{datTec.descripcion}
        </li>
      ))
    };

    const datosVarios = productoSeleccionado.otros;

    const listaDatosVarios = datosVarios.map((datVar) => {
      return {
        tipo: datVar[0].split(":")[0].trim(),
        descripcion: datVar[0].split(":")[1].trim(),
      };
    });

    const renderListaDatosVarios = () => {
      return listaDatosVarios.map((datVar) => (
        <li className='py-3' key={datVar.tipo}>
              <span className="font-bold text-gray-800 dark:text-white">{datVar.tipo}: </span>{datVar.descripcion}
        </li>
      ))
    };

  return (
    <>
        <h6 className="mb-2 text-lg font-semibold tracking-tight">
          Especificaciones:
        </h6>
        <Accordion collapseAll>
          <AccordionPanel>
            <AccordionTitle>
              <div className='flex flex-wrap'><AiFillThunderbolt className='mt-1 me-2' /> Electricas</div>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-none list-inside'>
                {renderListaDatosElectricos()}
              </ul>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              <div className='flex flex-wrap'><AiOutlinePoweroff className='mt-1 me-2' /> Tecnicas</div>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-none list-inside'>
                {renderListaDatosTecnicos()}
              </ul>
            </AccordionContent>
          </AccordionPanel>
          <AccordionPanel>
            <AccordionTitle>
              <div className='flex flex-wrap'><AiFillTool className='mt-1 me-2' /> Otros</div>
            </AccordionTitle>
            <AccordionContent>
              <ul className='list-none list-inside'>
                {renderListaDatosVarios()}
              </ul>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
    </>
  )
}

export default DetallesTecnicosProd