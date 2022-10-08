import React from 'react'
import {
  Link,
  NavLink
} from "react-router-dom"; 

const Navbar = (props) => {
  return (
    <div class="navbar navbar-dark bg-dark">
      <Link className='navbar-brand' to='/'>MARCA</Link>
      <div className="">
        <div className="d-flex">
          <NavLink to='/' className='btn btn-dark mr-2' exact>Inicio</NavLink>
          <NavLink to='/register' className='btn btn-dark mr-2' activeClassName='active'>Registrar</NavLink>
          <NavLink to='/login' className='btn btn-dark mr-2' activeClassName='active'>Iniciar Sessión</NavLink>
          <NavLink to='/configuration' className='btn btn-dark mr-2' activeClassName='active'>Configuración</NavLink>
          <NavLink to='/dashboard' className='btn btn-dark mr-2' activeClassName='active'>Escritorio</NavLink>
          <NavLink to='/mantenedores' className='btn btn-dark mr-2' activeClassName='active'>Mantenedor</NavLink>
          <NavLink to='/ejemplos' className='btn btn-dark mr-2' activeClassName='active'>Ejemplos</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar