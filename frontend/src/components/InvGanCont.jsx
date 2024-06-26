import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import FormularioInvGan from './FormularioInvGan'

function InvGanCont() {
  return (
    <>
        <br />
      <br />
      <br />
      <br />
      <section id='invita/gana' className='bg-white lg:mt-12'>
        <br />
        <div className='ms-4 w-fit rounded-md' style={{backgroundColor:'#84cc16'}}>
          <Link className='flex p-3' to={'/Voltinela/'}>
              <AiOutlineArrowLeft className="lg:size-10" style={{color:'white'}}/>
          </Link>
        </div>
        <br />
        <div className='titulo container mx-auto w-max lg:py-10'>
           <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Invita y Gana</h3>
        </div>
        <div className='bg-white'>
          <div className='container mx-auto px-4 py-5'>
            <h2 className='text-lg font-semibold lg:text-3xl'>¡Transforma tus recomendaciones en beneficios con Voltinela!</h2>
            <br />
            <p className='lg:text-xl'>
              Si conoces a alguien interesado en dar el paso hacia la sostenibilidad energética, es tu oportunidad de obtener 
              y ofrecer valor añadido. A través de nuestro programa “Invita y Gana”, tendrás la posibilidad de recibir una 
              recompensa financiera equivalente al 5% del valor de la compra de tu referido. Además, tu referido se beneficiará 
              de un descuento inmediato del 5% en su adquisición. Es una oportunidad perfecta para que ambos avancen 
              hacia un futuro más verde, obteniendo ventajas tangibles por su compromiso con el planeta.
            </p>
            <br />
            <p className='lg:text-xl'>
              ¿Listo para empezar? Rellena nuestro formulario de inscripción ahora y haz que tus recomendaciones cuenten.
            </p>
            <p className='lg:text-xl'>¡Tu red y tú están a solo un paso de obtener beneficios mutuos!</p>
            <br />
            <FormularioInvGan />
            <br />
            <h2 className='text-lg font-semibold lg:text-3xl'>Reglas</h2>
            <br />
            <ul className='container mx-auto px-10 text-sm font-normal list-decimal lg:text-lg'>
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Elegibilidad:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>Solo pueden participar individuos mayores de 18 años.</li>
                  <li className='lg:text-xl'>Las ventas y participaciones son exclusivas para residentes de Venezuela.</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Cómo Participar:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>
                    Para unirse al programa, los interesados deben compartir su correo electrónico en nuestro 
                    formulario en línea. Se enviará un código único vía correo electrónico, el cual podrán compartir 
                    con sus referidos.
                  </li>
                  <li className='lg:text-xl'>
                    Los referidos deben utilizar este código al realizar su primera compra para que la 
                    referencia sea válida.
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Recompensas y Beneficios:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>Las recompensas serán entregadas dentro de los 30 días siguientes a la compra exitosa del referido.</li>
                  <li className='lg:text-xl'>
                    Voltinela se reserva el derecho de elegir el método de pago de las recompensas, que puede 
                    incluir pago móvil, efectivo, Zelle, u otros medios de pago.
                  </li>
                  <li className='lg:text-xl'>El descuento otorgado aplica únicamente en la primera compra del cliente referido.</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Restricciones de Uso:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>Las recompensas y descuentos no son acumulables con otras promociones o descuentos.</li>
                  <li className='lg:text-xl'>Tanto las recompensas como los descuentos tienen una validez de 2 meses desde el momento de su emisión.</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Condiciones de Referencia:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>Los referidos deben ser nuevos clientes de Voltinela.</li>
                  <li className='lg:text-xl'>
                    La compra del referido debe ser completada y verificada para que la recompensa y el 
                    descuento sean aplicables.
                  </li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Cancelación y Modificación:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>
                    Voltinela se reserva el derecho de modificar, suspender o cancelar el programa en cualquier momento, 
                    notificando previamente a los participantes.
                  </li>
                  <li className='lg:text-xl'>Cualquier intento de abuso o fraude del programa resultará en la exclusión del mismo.</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Privacidad y Uso de Datos:</h3>
                <ul className='list-disc px-5 lg:px-10'>
                  <li className='lg:text-xl'>
                    La información proporcionada será utilizada exclusivamente para la identificación de los 
                    participantes y la administración de los beneficios del programa.
                  </li>
                  <li className='lg:text-xl'>Voltinela se compromete a proteger la privacidad de los datos personales de los participantes.</li>
                </ul>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Limitación de Responsabilidad:</h3>
                <p className='lg:text-xl'>
                  Voltinela no será responsable por fallas técnicas, errores humanos, ni por ninguna circunstancia fuera 
                  de su control que pueda afectar la inscripción, el proceso de referencia o la entrega de recompensas. 
                  Se harán todos los esfuerzos razonables para asegurar un proceso justo y transparente para todos los 
                  participantes.
                </p>
              </li>
              <br />
              <li>
                <h3 className='text-lg font-semibold lg:text-2xl'>Legislación Aplicable y Resolución de Conflictos:</h3>
                <p className='lg:text-xl'>
                  Este programa se rige por la legislación de Venezuela. Cualquier disputa o reclamación derivada del 
                  programa será resuelta bajo las leyes venezolanas, y las partes se someten a la jurisdicción exclusiva 
                  de los tribunales de Venezuela.
                </p>
              </li>
            </ul>
          </div>
          <br />
        </div>
      </section>
      <br />
    </>
  )
}

export default InvGanCont