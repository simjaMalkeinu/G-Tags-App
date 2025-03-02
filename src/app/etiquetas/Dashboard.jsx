import React from 'react'

function Dashboard () {
  return (
    <div className='h-screen bg-gradient-to-r from-[#0c1319] from-10% via-[#141d24] via-50% to-[#273039] to-100% flex  text-white'>
      <div className='w-40'>hola</div>

      <div className='flex-1 pt-4 flex flex-col'>
        <nav className='flex justify-between w-full pt-2 px-4 mb-6 pr-10'>
          <h1 className='text-2xl font-bold'>HeroUI</h1>
          <div className='flex space-x-4'>
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </nav>

        <Card className='w-full flex-1 rounded-[1rem]'>
          <CardHeader>
            <h1 className='text-2xl font-bold'>Hello World</h1>
          </CardHeader>
          <CardBody>
            <p className='text-sm'>This is a simple card component</p>
            <p>Click me</p>
            <Alert type='info'>This is an alert</Alert>
            <Image src='https://via.placeholder.com/150' alt='Placeholder' />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard
