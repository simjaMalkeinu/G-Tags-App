import React from 'react'

import './Login.css'
import { Button, Card } from '@heroui/react'

function Login () {
  return (
    <section className='h-screen bg-slate-200 grid justify-center items-start gap-10 grid-rows-[200px,auto] login'>
      <h1 className='self-center text-center font-bold text-2xl'>Sistema integral</h1>
      <div className='flex gap-10  justify-center items-center flex-wrap'>
        <Card className='w-96 h-[30rem] border-white border-solid border-2 bg-[#f9f9f998] p-3'>
          <div className='h-full grid grid-rows-[auto,50px] gap-4'>
            <div className='grid place-items-center flex-1 grid-rows-[auto,50px]'>
              <img src='https://via.placeholder.com/150' alt='Logo' />
              <h1 className='text-2xl font-bold'>Sistema de etiquetas</h1>
            </div>
            <Button
              color='secondary'
              variant='solid'
              className='w-full h-full bg-blue-950 text-white'
            >
              Ingresar al sistema de etiquetas
            </Button>
          </div>
        </Card>

        <Card className='w-96 h-[30rem] border-white border-solid border-2 bg-[#f9f9f998] p-3'>
          <div className='h-full grid grid-rows-[auto,50px] gap-4'>
            <div className='grid place-items-center flex-1 grid-rows-[auto,50px]'>
              <img src='https://via.placeholder.com/150' alt='Logo' />
              <h1 className='text-2xl font-bold'>Sistema de reportess</h1>
            </div>
            <Button
              color='secondary'
              variant='solid'
              className='w-full h-full bg-blue-950 text-white'
            >
              Ingresar al sistema de reportes
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default Login
