import React,{ useState } from 'react'


const Login = (props) => {
  const [registro, setregistro] = useState(true)
  const [formularioError, setformularioError] = useState({emailT:'Debe agregar un email',passwordT:'Debe agregar una contraseña'})
  const [datos, setdatos] = useState([])


  const formulariollenado = e =>{
    setdatos({...datos,[e.target.name]:e.target.value})
  }
  const procesarDatos = e =>{
    e.preventDefault()
    if(validacionDatos()){
    
    }
  }
  const validacionDatos= ()=>{
    let error={}
    if(Object.keys(datos).length !== 0){
        if(datos.email===undefined || datos.email ===''){
            error.email=true
        }else if(datos.email.trim()===''){
            error.email=true
        }else{
            error.email=false
        }
        if(datos.password===undefined || datos.password ===''){
            error.password=true
        }else if(datos.password.trim()===''){
            error.password=true
        }else{
            error.password=false
        }
    }else{
        error.email=true
        error.password=true
    }
    setformularioError({...formularioError,...error})
    if(!error.nombre && !error.password){
        return true
    }else{
        return false
    }
}
  
  return (
    <div className='mt-5'>
      <h3 className='text-center'>Acceso o Resgistro de nuevo ususrios</h3>
      <hr/>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            { formularioError.email===true && (<div className="invalid-feedbackaa text-danger">{formularioError.emailT}</div>)} 
            <input type="email" className="form-control mb-2" placeholder='Ingrese un email' name='email' onChange={(e)=>formulariollenado(e)} />
            { formularioError.password===true && (<div className="invalid-feedbackaa text-danger">{formularioError.passwordT}</div>)} 
            <input type="password" className="form-control mb-2" placeholder='Ingrese password' name='password'  onChange={(e)=>formulariollenado(e)}/>
            <button className="btn btn-info btn-lg btn-sm btn-block">Registrarse</button>
            <button className="btn btn-link btn-lg btn-sm btn-block">¿Ya tienes cuenta?</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login