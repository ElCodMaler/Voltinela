import React from 'react'
import FormularioDetal from './FormularioDetal'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

const DetalTextForm = () => {
  return (
    <>
        <br />
        <br />
        <br />
        <section>
            <div className='ms-4 w-fit bg-white/30 rounded-md'>
                <Link className='flex p-3' to={'/Voltinela/'}>
                    <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
            </div>
            <div className='titulo container mx-auto w-max lg:py-10'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Detal</h3>
            </div>
            <br />
            <div className='bg-white lg:py-10'>
                <div className='container mx-auto px-5 lg:px-12'>
                    <br />
                    <h2 className='text-lg font-semibold lg:text-3xl'>¡Lleva tu negocio al siguiente nivel con Voltinela!</h2>
                    <br />
                    <h3 className='font-medium lg:text-xl'>¿Buscas diversificar tu oferta con soluciones energéticas que sean tanto innovadoras como sostenibles?</h3>
                    <p className='lg:text-xl'>
                        En Voltinela, estamos comprometidos con reforzar la seguridad energética y promover la autosuficiencia, 
                        ofreciendo productos avanzados como sistemas de almacenamiento de energía, estaciones portátiles de poder, 
                        paneles solares, y mucho mas. Nuestra gama está diseñada para satisfacer las necesidades de un mercado crecientemente 
                        consciente de la importancia de la sostenibilidad y la tecnología.
                    </p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>Beneficios para tu negocio:</h3>
                    <br />
                    <ul className='container mx-auto px-10 text-sm font-normal list-disc lg:text-lg'>
                        <li>
                            Enriquece tu catálogo con soluciones energéticas de vanguardia que aseguran una fuente de energía confiable, 
                            accesible y sostenible.
                        </li>
                        <br />
                        <li>
                            Atrae a una amplia audiencia interesada en la autosuficiencia y la innovación tecnológica.
                        </li>
                        <br />
                        <li>
                            Disfruta de nuestro completo soporte de ventas y marketing para una integración exitosa y rentable.
                        </li>
                    </ul>
                    <br />
                    <FormularioDetal />
                    <br />
                    <p className='lg:text-xl'>
                        Sé parte del cambio. Invitamos a tiendas de retail visionarias a colaborar con nosotros. 
                        Si deseas enriquecer tu oferta con soluciones que marcan la diferencia, por favor comparte tus datos a través del 
                        formulario de contacto abajo o comunícate directamente con nosotros. Juntos, podemos hacer que la energía renovable 
                        sea una realidad accesible para todos.
                    </p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>Para Potenciales Distribuidores</h3>
                    <br />
                    <p className='lg:text-xl'>Conviértete en Distribuidor de Voltinela y Abre Camino a un Futuro Sostenible</p>
                    <br />
                    <p className='lg:text-xl'>En Voltinela, lideramos la transformación hacia un futuro energético más sostenible y autosuficiente. 
                        Nos especializamos en ofrecer soluciones energéticas de alta calidad que incluyen sistemas de 
                        almacenamiento de energía, estaciones portátiles de poder, paneles solares, y mucho mas, haciendo la energía 
                        renovable accesible para todos.
                    </p>
                    <br />
                    <h3 className='font-medium lg:text-xl'>¿Por qué unirte a nuestra red de distribución?</h3>
                    <br />
                    <ul className='container mx-auto px-10 text-sm font-normal list-disc lg:text-lg'>
                        <li>
                            Ofrece productos de energía renovable líderes en el mercado, destacando por su innovación, eficiencia y 
                            sostenibilidad.
                        </li>
                        <br />
                        <li>
                            Apoya a hogares, negocios y fábricas en su transición hacia la autosuficiencia energética.
                        </li>
                        <br />
                        <li>
                            Benefíciate de ventajas exclusivas, incluido un amplio soporte técnico y promocional.
                        </li>
                    </ul>
                    <br />
                    <p className='lg:text-xl'>
                        Hazte distribuidor hoy. Estamos en busca de socios que compartan nuestra visión de un futuro más verde y 
                        autosuficiente. Si estás interesado en esta oportunidad, te invitamos a dejarnos tus datos en el 
                        formulario de contacto a continuación o a ponerte en contacto con nosotros. Juntos, podemos liderar el cambio 
                        hacia un mundo más sostenible.
                    </p>
                    <br />
                    <FormularioDetal />
                </div>
                <br />
            </div>
        </section>
        <br />
    </>
  )
}

export default DetalTextForm