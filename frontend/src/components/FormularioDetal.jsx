import React, { useRef } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react"
import { enviarMensaje } from '../util/email'

function FormularioDetal() {
  
  const btn = useRef(null);
  const form = useRef(null);

  return (
    <>
        <section>
          <div className='container mx-auto px-4 lg:px-32'>
              <h3 className='flex justify-center text-lg font-semibold lg:text-2xl'>Informacion de contacto</h3>
              <form ref={form} id="form" name='form' onSubmit={(e) => enviarMensaje(e,btn,form)} className="flex w-full flex-col gap-4">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="socialName" value="Empresa" />
                  </div>
                  <TextInput id="socialName" type="text" placeholder="Razón social" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="rif" value="RIF" />
                  </div>
                  <TextInput id="rif" type="text" placeholder="RIF de la empresa" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="location" value="Ubicación" />
                  </div>
                  <TextInput id="location" type="text" placeholder="Ubicación de la empresa" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Contacto" />
                  </div>
                  <TextInput id="to_name" name="to_name" type="text" placeholder="Nombre y apellido" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="work" value="Cargo" />
                  </div>
                  <TextInput id="work" type="text" placeholder="Cargo en la empresa" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="email" value="email" />
                  </div>
                  <TextInput id="email" type="email" placeholder="name@email.com" required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="phone" value="Teléfono" />
                  </div>
                  <TextInput id="phone" type="text" placeholder="+58..." required />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Tu mensaje" />
                  </div>
                  <Textarea id="mensaje" name="mensaje" placeholder="Dejanos tus dudas y comentarios..." required rows={4} />
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Recuerdame</Label>
                </div>
                <div className='container mx-auto px-28 lg:px-60'>
                  <Button id="button" name='button' ref={btn} className='w-full' type="submit" pill style={{backgroundColor: '#84cc16'}}>
                    <p className='lg:text-xl'>Envíar</p>
                  </Button>
                </div>
              </form>
          </div>
      </section>
    </>
  )
}

export default FormularioDetal