import React, { useRef } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react"
import { enviarMensaje } from '../util/email'

function FormularioDetal({info}) {
  const numero_cliente = '4128849604';
  let mensaje = '';

  const btn = useRef(null);
  const form = useRef(null);

  const nombre_empresa = useRef(null);
  const rif_empresa = useRef(null);
  const ubicacion = useRef(null);
  const nombre = useRef(null);
  const cargo = useRef(null);
  const email = useRef(null);
  const telefono = useRef(null);

  const handleSendWS = () => {
    mensaje = mensaje+`(Formulario Detal)/Empresa:${nombre_empresa.current.value}; 
    Rif:${rif_empresa.current.value}; 
    ubicacion:${ubicacion.current.value}; 
    nombre:${nombre.current.value}; 
    cargo:${cargo.current.value};
    email:${email.current.value};
    telefono:${telefono.current.value}.`;
    
    window.open(`https://api.whatsapp.com/send?phone=+58${numero_cliente}&text=${mensaje}`)
  }

  return (
    <>
        <section>
          <div className='container mx-auto px-4 lg:px-32'>
              <h3 className='flex justify-center text-lg font-semibold lg:text-2xl'>{info.tituloFormularioDetal}</h3>
              <form ref={form} id="form" name='form' onSubmit={(e) => enviarMensaje(e,btn,form)} className="flex w-full flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="socialName" value={info.empresa} />
                  </div>
                  <TextInput id="socialName" ref={nombre_empresa} type="text" placeholder={info.placeholderEmpresa} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="rif" value="RIF" />
                  </div>
                  <TextInput id="rif" ref={rif_empresa} type="text" placeholder={info.placeholderRif} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="location" value={info.ubicacion} />
                  </div>
                  <TextInput id="location" ref={ubicacion} type="text" placeholder={info.placeholderUbicacion} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value={info.contacto} />
                  </div>
                  <TextInput id="to_name" name="to_name" ref={nombre} type="text" placeholder={info.placeholderNombre} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="work" value={info.cargo} />
                  </div>
                  <TextInput id="work" ref={cargo} type="text" placeholder={info.placeholderCargo} required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value={info.correo} />
                  </div>
                  <TextInput id="email" ref={email} type="email" placeholder="name@email.com" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value={info.telefono} />
                  </div>
                  <TextInput id="phone" ref={telefono} type="text" placeholder="+58..." required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value={info.tuMensaje} />
                  </div>
                  <Textarea id="mensaje" name="mensaje" placeholder={info.mensaje} required rows={4} />
                </div>
                <div className='container mx-auto px-28 lg:px-60'>
                  <Button id="button" name='button' ref={btn} onClick={() => handleSendWS} className='w-full' type="submit" pill style={{backgroundColor: '#84cc16'}}>
                    <p className='lg:text-xl'>{info.enviar}</p>
                  </Button>
                </div>
              </form>
          </div>
      </section>
    </>
  )
}

export default FormularioDetal