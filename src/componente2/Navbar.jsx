import React,{useEffect,useState} from 'react'
import {
  Link,
  NavLink
} from "react-router-dom"; 
import {auth} from '../firebase'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {
  const [login, setlogin] = useState(true)

  useEffect(() => {debugger
    
    if(auth.currentUser){
      console.log('usuario Logueeado')
      if(props.history.location.pathname==='/login'){
        props.history.push('/dashboard')
      }
      setlogin(true)
    }else{
      console.log(props.history.location.pathname)
      console.log('NO usuario Logueeado')
      if(props.history.location.pathname!=='/login'){
        props.history.push('/login')
      }
      setlogin(false)
      
    }
    return () => {
    }
  }, [props,setlogin,login])
  
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className='navbar-brand' to='/'>SkillWeb</Link>
      <div className="">
        <div className="d-flex">
          {login ? (<>
          <NavLink to='/' className='btn btn-dark mr-2' exact>Inicio</NavLink>
          <NavLink to='/register' className='btn btn-dark mr-2' activeClassName='active'>Registrar</NavLink>
          <NavLink to='/dashboard' className='btn btn-dark mr-2' activeClassName='active'>Escritorio</NavLink>
          <NavLink to='/configuration' className='btn btn-dark mr-2' activeClassName='active'>Configuración</NavLink>
          <NavLink to='/mantenedores' className='btn btn-dark mr-2' activeClassName='active'>Mantenedor</NavLink>
          <NavLink to='/ejemplos' className='btn btn-dark mr-2' activeClassName='active'>Ejemplos</NavLink>
          <div to='/login' className='btn btn-dark mr-2'>Cerrar Sesion</div>
          </>):
          (
          <>
           <NavLink to='/login' className='btn btn-dark mr-2' activeClassName='active'>Iniciar Sessión</NavLink>
           <NavLink to='/ejemplos' className='btn btn-dark mr-2' activeClassName='active'>Ejemplos</NavLink>
          </>
          )
          }
        </div>
      </div>
    </div>
  )
}

export default withRouter(Navbar)