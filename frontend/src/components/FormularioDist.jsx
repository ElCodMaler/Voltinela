import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react"
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from "react-icons/ai"

const FormularioDist = () => {
  return (
    <>
        <br />
        <br />
        <br />
        <section>    
            <div className='titulo container mx-auto w-max'>
               <h3 className='text-lg text-white text-center font-bold px-4 py-1 rounded-full shadow-xl md:text-3xl md:py-2 lg:text-4xl lg:py-3' style={{backgroundColor:'#84cc16'}}>Distribuidor</h3>
            </div>
            <div className='ms-4 w-fit bg-white/30 rounded-md'>
                <Link className='flex p-3' to={'/Voltinela/'}>
                    <AiOutlineArrowLeft style={{color:'white'}}/>
                </Link>
            </div>
            <div className='container mx-auto px-4 lg:px-32'>
                <form className="flex w-full flex-col gap-4">
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="name" value="name" />
                      </div>
                      <TextInput id="name" type="text" placeholder="Razón social" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="email" value="Your email" />
                      </div>
                      <TextInput id="email" type="email" placeholder="name@email.com" required />
                    </div>
                    <div>
                      <div className="mb-2 block">
                        <Label htmlFor="dato" value="dato" />
                      </div>
                      <TextInput id="dato" type="text" placeholder="dato" required />
                    </div>
                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className='text-white'>Remember me</Label>
                    </div>
                    <div className='container mx-auto px-32 lg:px-60'>
                      <Button className='w-full' type="submit" pill style={{backgroundColor: '#84cc16'}}>Envíar</Button>
                    </div>
                </form>
            </div>
        </section>
        <br />
    </>
  )
}

export default FormularioDist