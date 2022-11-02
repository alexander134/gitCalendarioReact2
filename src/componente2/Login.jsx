import React,{ useState } from 'react'
import  {auth,db}  from '../firebase'
import { withRouter } from 'react-router-dom'


const Login = (props) => {
  const [registro, setregistro] = useState(true)
  const [errorFirebase, seterrorFirebase] = useState('')
  const [formularioError, setformularioError] = useState({emailT:'Debe agregar un email',passwordT:'Debe agregar una contraseña',passwordT2:'Debe ingresar nuevamente la contraseña'})
  const [datos, setdatos] = useState({email:'',password:'',password2:''})


  const formulariollenado = e =>{
    setdatos({...datos,[e.target.name]:e.target.value})
  }
  const procesarDatos = e =>{
    e.preventDefault()
    seterrorFirebase('')
    if(validacionDatos()){
      if(!registro){
        registarMail()
      }else{
        entrarCuenta()
      }

    }else{
      console.log("NO paso validacion");
    }
  }
const registarMail = React.useCallback(async()=>{
  try {
    const respuesta = await auth.createUserWithEmailAndPassword(datos.email,datos.password)
    await db.collection('usuario').doc(respuesta.user.uid).set({
      email:datos.email,
      password:datos.password,
      uid:respuesta.user.uid,
      apellido:'',
      nombre:'',
      fechaComputo: Date.now()
    })
    setdatos({email:'',password:'',password2:''})
    setregistro(false)
  } catch (error) {
    seterrorFirebase(error.message)
    console.log(error);
  }
},[datos,setdatos])

const entrarCuenta = React.useCallback(async()=>{
  try {
    const respuesta = await auth.signInWithEmailAndPassword(datos.email,datos.password)
    console.log(respuesta);
    props.history.push('/dashboard')
    //setdatos({email:'',password:'',password2:''})
  } catch (error) {
    seterrorFirebase(error.message)
    console.log(error);
  }
},[datos,setdatos,props])

  const validacionDatos= ()=>{
    let error={
      email:false,
      password:false,
      password2:false
    }
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


      if(!registro && !error.password){
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
    }
    setformularioError({...formularioError,...error})
    if(!error.email && !error.password  && !error.password2){
      return true
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
            {errorFirebase!=='' && (<div className="alert alert-danger">{errorFirebase}</div>)}
            {formularioError.email===true && (<div className="invalid-feedbackaa text-danger">{formularioError.emailT}</div>)} 
            <input type="email" className="form-control mb-2" placeholder='Ingrese un email' name='email' value={datos.email} onChange={(e)=>formulariollenado(e)} />
            { formularioError.password===true && (<div className="invalid-feedbackaa text-danger">{formularioError.passwordT}</div>)} 
            <input type="password" className="form-control mb-2" placeholder='Ingrese password' name='password' value={datos.password}  onChange={(e)=>formulariollenado(e)}/>
            { formularioError.password2===true && (<div className="invalid-feedbackaa text-danger">{formularioError.passwordT2}</div>)} 
            { !registro && (<input type="password" className="form-control mb-2" placeholder='Repita password' value={datos.password2} name='password2'  onChange={(e)=>formulariollenado(e)}/>)}
            <button className={`btn btn-lg btn-sm btn-block ${registro ? "btn-info" : "btn-success"  }`}>{registro ? "Ingresar" : "Crear Cuenta" }</button>
          </form>
          <div className="row">
            <div className={`col-${registro ?'6':'12'}`}>
            <button className="btn btn-link btn-lg btn-sm btn-block mt-2" onClick={e=>{setregistro(!registro);setdatos({...datos,password2:''});setformularioError({...formularioError,...{email:false,password:false,password2:false}})}}>
          {registro ? "¿Ya tienes cuenta?" : "Tengo Cuenta!" }</button>
            </div>
            {registro && (<div className="col-6"> 
            <button className="btn btn-danger btn-lg btn-sm btn-block mt-2" onClick={()=>props.history.push('/reset')}>
            Recuperar Contraseña!</button>
            </div>)}
          </div>
          
        </div>
      </div>
    </div>
    
  )

}

export default withRouter(Login)