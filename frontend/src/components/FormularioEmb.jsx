import React, { useRef } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react"
import { enviarMensaje } from '../util/email'

function FormularioEmb({info}) {
  
  const btn = useRef(null);
  const form = useRef(null);

  return (
    <>
      <section>
        <div className='container mx-auto px-4 lg:px-32'>
          <h3 className='flex justify-center text-lg font-semibold lg:text-2xl'>{info.tituloFormularioInvGan}</h3>
          <form ref={form} id="form" name='form' onSubmit={(e) => enviarMensaje(e,btn,form)} className="flex w-full flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value={info.nombre} />
              </div>
              <TextInput id="to_name" name="to_name" type="text" placeholder={info.placeholderNombre} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="ci" value={info.cedula} />
              </div>
              <TextInput id="ci" type="text" placeholder="C.I." required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value={info.correo} />
              </div>
              <TextInput id="email" type="email" placeholder="name@email.com" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value={info.telefono} />
              </div>
              <TextInput id="phone" type="text" placeholder="+58..." required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="location" value={info.direccion} />
              </div>
              <TextInput id="location" type="text" placeholder={info.placeholderDireccion} required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="comment" value={info.tuMensaje} />
              </div>
              <Textarea id="mensaje" name="mensaje" placeholder={info.mensaje} required rows={4} />
            </div>
            <div className='container mx-auto px-28 lg:px-60'>
              <Button id="button" name='button' ref={btn} className='w-full' type="submit" pill style={{backgroundColor: '#84cc16'}}>
                <p className='lg:text-xl'>{info.enviar}</p>
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}

export default FormularioEmb