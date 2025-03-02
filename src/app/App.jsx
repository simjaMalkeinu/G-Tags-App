import { Alert, Button } from '@heroui/react'
import React from 'react'

function App () {
  return (
    <div className='h-screen bg-slate-600'>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-4xl font-bold text-white'>Hello, world!</h1>
        <Button>APP</Button>
        <Alert description='This is an alert' title='Alert' />
      </div>
    </div>
  )
}

export default App
