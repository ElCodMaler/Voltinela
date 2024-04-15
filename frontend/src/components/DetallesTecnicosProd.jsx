import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react"
import { AiFillTool, AiFillThunderbolt, AiOutlinePoweroff, AiOutlineUsb, AiOutlineArrowLeft, AiOutlineWhatsApp } from 'react-icons/ai'
import datos from '../dataBase/datos.json'

const productos = Object.keys(datos).map((producto) => datos[producto]);

function DetallesTecnicosProd() {

  const { id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === id);

  const datosElectricos = productoSeleccionado.especificacionesElectricas;
  const datosTecnicos = productoSeleccionado.especificacionesTecnicas;
  const datosVarios = productoSeleccionado.otros;

  const listaDatosElectricos = datosElectricos.map((datElec) => {
    return {
      tipo: datElec[0].split(":")[0].trim(),
      descripcion: datElec[0].split(":")[1].trim(),
    };
  });
  const listaDatosTecnicos = datosTecnicos.map((datTec) => {
    return {
      tipo: datTec[0].split(":")[0].trim(),
      descripcion: datTec[0].split(":")[1].trim(),
    };
  });
  const listaDatosVarios = datosVarios.map((datVar) => {
    return {
      tipo: datVar[0].split(":")[0].trim(),
      descripcion: datVar[0].split(":")[1].trim(),
    };
  });

  const especificacionesTodas = [listaDatosElectricos, listaDatosTecnicos, listaDatosVarios];

  const contDatosElectricos = especificacionesTodas[0].map((dat)=>{return dat.tipo});
  const contDatosTecnicos = especificacionesTodas[1].map((dat)=>{return dat.tipo});
  const contDatosVarios = especificacionesTodas[2].map((dat)=>{return dat.tipo});

  const renderAccordion = () => {
    if (contDatosElectricos != 'Lorem' || contDatosTecnicos != 'Lorem' || contDatosVarios != 'Lorem') {
      return (
        <>
          <br />
          <h6 className='text-lg font-semibold lg:text-2xl'>Especificaciones: </h6>
          <br />
          <Accordion collapseAll>
            {renderAccordionElectricos()}
            {renderAccordionTecnicos()}
            {renderAccordionVarios()}
          </Accordion>
        </>
      )
    }
  };

  const renderAccordionElectricos = () => {
    if (contDatosElectricos != 'Lorem') {
      return (
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
      )
    }
  };

  const renderAccordionTecnicos = () => {
    if (contDatosTecnicos != 'Lorem') {
      return (
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
      )
    }
  };

  const renderAccordionVarios = () => {
    if (contDatosVarios != 'Lorem') {
      return (
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
      )
    }
  };

  const renderListaDatosElectricos = () => {
    return listaDatosElectricos.map((datElec) => (
      <li className='py-3' key={datElec.tipo}>
        <span className="font-bold text-gray-800 lg:text-xl">{datElec.tipo}: </span>{datElec.descripcion}
      </li>
    ))
  };

  const renderListaDatosTecnicos = () => {
    return listaDatosTecnicos.map((datTec) => (
      <li className='py-3' key={datTec.tipo}>
        <span className="font-bold text-gray-800 lg:text-xl">{datTec.tipo}: </span>{datTec.descripcion}
      </li>
    ))
  };

  const renderListaDatosVarios = () => {
    return listaDatosVarios.map((datVar) => (
      <li className='py-3' key={datVar.tipo}>
        <span className="font-bold text-gray-800 lg:text-xl">{datVar.tipo}: </span>{datVar.descripcion}
      </li>
    ))
  }

  return (
    <>
      {renderAccordion()}
    </>
  )
}

export default DetallesTecnicosProd