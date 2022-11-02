import React,{ useState } from 'react'
import  {auth,db}  from '../firebase'
import { withRouter } from 'react-router-dom'

const Reset = (props) => {
  const [errorFirebase, seterrorFirebase] = useState('')
  const [formularioError, setformularioError] = useState({emailT:'Debe agregar un email'})
  const [datos, setdatos] = useState({email:''})

  const formulariollenado = e =>{
    setdatos({...datos,[e.target.name]:e.target.value})
  }
  const procesarDatos = e =>{
    e.preventDefault()
    seterrorFirebase('')
    if(validacionDatos()){
        resetPassMail()
    }else{
      console.log("NO paso validacion");
    }
  }
  const resetPassMail = React.useCallback(async()=>{
    try {
      const respuesta = await auth.sendPasswordResetEmail(datos.email)
      console.log("correo enviado para recuperar contraseña");
      props.history.push('/login')
    } catch (error) {
      seterrorFirebase(error.message)
      console.log(error);
    }
  },[datos])

  const validacionDatos= ()=>{
    let error={
      email:false
    }
    if(Object.keys(datos).length !== 0){
      if(datos.email===undefined || datos.email ==='' || datos.email.trim()===''){
          error.email=true
      }else{
          error.email=false
      }
      
    }
    setformularioError({...formularioError,...error})
    if(!error.email ){
      return true
    }else{
      return false
    }
  }

  return (
    <div className='mt-5'>
      <h3 className='text-center'>Resetear Contraseña</h3>
      <hr/>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={procesarDatos}>
            {errorFirebase!=='' && (<div className="alert alert-danger">{errorFirebase}</div>)}
            {formularioError.email===true && (<div className="invalid-feedbackaa text-danger">{formularioError.emailT}</div>)} 
            <input type="email" className="form-control mb-2" placeholder='Ingrese un email' name='email' value={datos.email} onChange={(e)=>formulariollenado(e)} />
            
            <button className="btn btn-lg btn-sm btn-block btn-success">Resetear Contraseña</button>
          </form>
          <div className="row">
            <div className="col-12"> 
            <button className="btn btn-danger btn-lg btn-sm btn-block mt-2" onClick={()=>props.history.push('/login')}>
            Atras</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default withRouter(Reset)