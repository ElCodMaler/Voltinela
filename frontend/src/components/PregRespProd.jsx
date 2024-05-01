import React from 'react'
import { useParams } from 'react-router-dom'

function PregRespProd({productos, info}) {

  const { id } = useParams();

  const productoSeleccionado = productos.find((p) => p.id === id);

  const pregResp = productoSeleccionado.preguntas;

  const renderSeccionPreg = () => {
    if (pregResp != "Lorem :") {
      return (
        <>
          <section className="container mx-auto px-4">
            <div className='w-full items-center bg-white rounded-lg shadow shadow-xl sm:mx-10 md:mx-16 md:w-auto xl:mx-28 2xl:mx-36'>
              <div className='mx-5 py-5'>
                  <h5 className="me-5 text-lg font-bold tracking-tight lg:text-xl xl:text-2xl 2xl:text-3xl">
                    {info.preguntas}:
                  </h5>
                  <br />
                  <ul className="list-decimal list-inside">
                    {renderPreguntas()}
                  </ul>
              </div>
            </div>
          </section>
          <br />
        </>
      )
    }
  }

  const listaPregResp = pregResp.map((pregResp) => {
    if (pregResp != "Lorem :") {
      return {
        pregunta: pregResp[0].split(":")[0].trim(),
        respuesta: pregResp[0].split(":")[1].trim(),
      };
    }
  });

  const renderPreguntas = () => {
    return listaPregResp.map((pregResp) => (
      <li key={pregResp.pregunta} className="text-lg font-semibold tracking-tight xl:text-xl 2xl:text-2xl">
        {pregResp.pregunta}
        <br />
        <p className='text-base font-normal text-gray-700 xl:text-lg 2xl:text-xl'>{pregResp.respuesta}</p>
        <br />
      </li>))
  };

  return (
    <>
      {renderSeccionPreg()}
    </>
  )
}

export default PregRespProd