import React,{ useState } from 'react'


const Login = (props) => {
  const [registro, setregistro] = useState(true)
  const [formularioError, setformularioError] = useState({emailT:'Debe agregar un email',passwordT:'Debe agregar una contraseña',passwordT2:'Debe ingresar nuevamente la contraseña'})
  const [datos, setdatos] = useState([])


  const formulariollenado = e =>{
    setdatos({...datos,[e.target.name]:e.target.value})
  }
  const procesarDatos = e =>{
    e.preventDefault()
    if(validacionDatos()){
      console.log("paso validacion");
    }else{
      console.log("NO paso validacion");
    }
  }
  const validacionDatos= ()=>{
    let error={}
    debugger;
    if(Object.keys(datos).length !== 0){
      if(datos.email===undefined || datos.email ==='' || datos.email.trim()===''){
          error.email=true
      }else{
          error.email=false
      }
      error.passwordT='Debe agregar una contraseña'
      if(datos.password===undefined || datos.password ==='' || datos.password.trim()===''){
          error.password=true
      }else if(datos.password.length < 6){
          error.password=true
          error.passwordT='La contraseña debe ser mayor a 6 caracteres'
      }else{
        error.password=false
      }
      if(!registro){
        error.passwordT2='Debe ingresar nuevamente la contraseña'
        if(datos.password2===undefined || datos.password2 ==='' || datos.password2.trim()===''){
            error.password2=true
        }else if(datos.password2.length < 6){
            error.password2=true
            error.passwordT2='La contraseña debe ser mayor a 6 caracteres'
        }else if(datos.password2!==datos.password){
          error.password=true
          error.passwordT='Las contraseñas deben ser iguales'
          error.password2=false
        }else{
          error.password2=false
        }
      }
    }else{
        error.email=true
        error.password=true
    }
    setformularioError({...formularioError,...error})
    if(!error.email && !error.password){
      if(registro){
        return true
      }else{
        if(!error.password2){
          return true
        }else{
          return false
        }
      }
    }else{
      return false
    }
  }
  
  return (
    <div className='mt-5'>
      <h3 className='text-center'>{registro ? "Acceso de Ususrio" : "Nuevo Usuario" }</h3>
      <hr/>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            { formularioError.email===true && (<div className="invalid-feedbackaa text-danger">{formularioError.emailT}</div>)} 
            <input type="email" className="form-control mb-2" placeholder='Ingrese un email' name='email' onChange={(e)=>formulariollenado(e)} />
            { formularioError.password===true && (<div className="invalid-feedbackaa text-danger">{formularioError.passwordT}</div>)} 
            <input type="password" className="form-control mb-2" placeholder='Ingrese password' name='password'  onChange={(e)=>formulariollenado(e)}/>
            { formularioError.password2===true && (<div className="invalid-feedbackaa text-danger">{formularioError.passwordT2}</div>)} 
            { !registro && (<input type="password" className="form-control mb-2" placeholder='Repita password' name='password2'  onChange={(e)=>formulariollenado(e)}/>)}
            <button className={`btn btn-lg btn-sm btn-block ${registro ? "btn-info" : "btn-success"  }`}>{registro ? "Ingresar" : "Crear Cuenta" }</button>
            <button className="btn btn-link btn-lg btn-sm btn-block" onClick={e=>setregistro(!registro)}>
            {registro ? "¿Ya tienes cuenta?" : "Tengo Cuenta!" }</button>
          </form>
        </div>
      </div>
    </div>
    
  )

}

export default Login