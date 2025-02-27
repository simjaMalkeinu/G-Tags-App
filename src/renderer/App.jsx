import { NavLink, Outlet } from "react-router"

const App = () => {
  return (
    <div className='bg-gray-200 w-lvw h-lvh'>
      <h1>¡Hola desde React en Electron!</h1>

      <ul>
        <li>
          {/* <a href="/">home</a> */}
          <NavLink to={'/'} >Home</NavLink>
        </li>
        <li>
        {/* <a href="/dashboard">dashboard</a> */}
        <NavLink to={'/dashboard'} >dashboard</NavLink>
        </li>
      </ul>

      <Outlet />
      
    </div>
  )
}

export default App
