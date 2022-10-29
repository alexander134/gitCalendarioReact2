import React,{useEffect,useState} from 'react'
import {
  Link,
  NavLink
} from "react-router-dom"; 
import { withRouter } from 'react-router-dom'
import {auth} from '../firebase'

const Navbar = (props) => {
  
  const cerrarSesion = ()=>{
    console.log("cerro sesion");
    auth.signOut().then(()=>{
      props.history.push('/login')
    })
  }
  
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className='navbar-brand' to='/'>SkillWeb</Link>
      <div className="">
        <div className="d-flex">
          {props.login ? (<>
          {
            props.datosUsuario && (
              <h3>{props.datosUsuario.email}</h3>
            )
          }
          <NavLink to='/' className='btn btn-dark mr-2' exact>Inicio</NavLink>
          <NavLink to='/register' className='btn btn-dark mr-2' activeClassName='active'>Registrar</NavLink>
          <NavLink to='/dashboard' className='btn btn-dark mr-2' activeClassName='active'>Escritorio</NavLink>
          <NavLink to='/configuration' className='btn btn-dark mr-2' activeClassName='active'>Configuración</NavLink>
          <NavLink to='/mantenedores' className='btn btn-dark mr-2' activeClassName='active'>Mantenedor</NavLink>
          <NavLink to='/ejemplos' className='btn btn-dark mr-2' activeClassName='active'>Ejemplos</NavLink>
          <div to='/login' className='btn btn-dark mr-2'  onClick={()=>cerrarSesion()}>Cerrar Sesion</div>
          </>):
          (
          <>
           <NavLink to='/login' className='btn btn-dark mr-2' activeClassName='active'>Iniciar Sessión</NavLink>
           <NavLink to='/ejemplos' className='btn btn-dark mr-2' activeClassName='active' >Ejemplos</NavLink>
          </>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navbar)