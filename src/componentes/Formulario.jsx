import React from 'react'
import { useState } from 'react'

const Formulario = () => {
const [formularioIng, setformularioIng] = useState({})
const [formularioError, setformularioError] = useState({})
const [usuario, setUsuario] = useState([])


    const formulariollenado = (e)=>{
        setformularioIng({...formularioIng,[e.target.name]:e.target.value})
    }
    const procesarDatos = (e)=>{
        e.preventDefault()
        let error={}
        if(Object.keys(formularioIng).length !== 0){
            if(formularioIng.nombre===undefined || formularioIng.nombre ===''){
                error.nombre=true
            }else if(formularioIng.nombre.trim()===''){
                error.nombre=true
            }else{
                error.nombre=false
            }
            if(formularioIng.apellido===undefined || formularioIng.apellido ===''){
                error.apellido=true
            }else if(formularioIng.apellido.trim()===''){
                error.apellido=true
            }else{
                error.apellido=false
            }
            if(formularioIng.password===undefined || formularioIng.password ===''){
                error.password=true
            }else if(formularioIng.nombre.trim()===''){
                error.password=true
            }else{
                error.password=false
            }
        }else{
            error.nombre=true
            error.apellido=true
            error.password=true
        }
        setformularioError(error)
        if(!error.nombre && !error.apellido && !error.password){
            setUsuario([...usuario, {...formularioIng, id:usuario.length+1}])
            e.target.reset()
            setformularioIng({})
            return
        }
        
    }

  return (
    <div>
        <h2>Fomuralio</h2>
        <form onSubmit={procesarDatos}>
            <input type="text" placeholder='Ingrese Nombre' name='nombre' className='form-control mb-2'  onChange={(e)=>formulariollenado(e)}/>
            { formularioError.nombre===true && (<div className="invalid-feedbackaa">Error!</div>)} 
            <input type="text" placeholder='Ingrese Apellido' name='apellido' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
            { formularioError.apellido===true && (<div className="invalid-feedbackaa">Error!</div>)} 
            <input type="password" placeholder='Contraseña' name='password' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
            { formularioError.password===true && (<div className="invalid-feedbackaa">Error!</div>)} 
            <button className='btn btn-primary btn-block' type='submit'>Agregar Cuenta</button>
        </form>
{
    usuario.length!==0 ? (
        <ul>
            {
               usuario.map((elem)=>(
                <li  key={elem.id}>
                    {elem.nombre} - {elem.apellido} - {elem.password} 
                </li>
               )) 
            }
        </ul>
     ) : "Lista de usuarios vacia"
}
        
    </div>
  )
}

export default Formulario