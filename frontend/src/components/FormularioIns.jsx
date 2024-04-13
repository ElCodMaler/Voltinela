import React from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react"

function FormularioIns() {
  return (
    <>
        <section>
            <div className='container mx-auto px-4 lg:px-32'>
                <h3 className='flex justify-center text-lg font-semibold lg:text-2xl'>Informacion personal</h3>
                <form className="flex w-full flex-col gap-4">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="Nombre" />
                      </div>
                      <TextInput id="name" type="text" placeholder="Nombre y apellido" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="ci" value="Cédula de identidad" />
                      </div>
                      <TextInput id="ci" type="text" placeholder="C.I." required />
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
                        <Label htmlFor="location" value="Dirección" />
                      </div>
                      <TextInput id="location" type="text" placeholder="Tu dirección..." required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="comment" value="Tu mensaje" />
                      </div>
                      <Textarea id="comment" placeholder="Dejanos tus dudas y comentarios..." required rows={4} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember">Recuerdame</Label>
                    </div>
                    <div className='container mx-auto px-28 lg:px-60'>
                      <Button className='w-full' type="submit" pill style={{backgroundColor: '#84cc16'}}>
                        <p className='lg:text-xl'>Envíar</p>
                      </Button>
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default FormularioIns