import React from 'react'
import { useState } from 'react'

const Formulario = () => {
const [formularioIng, setformularioIng] = useState({})

    const formulariollenado = (e)=>{
        setformularioIng({...formularioIng,[e.target.name]:e.target.value})
    }
    const procesarDatos = (e)=>{
        e.preventDefault()
        if(Object.keys(formularioIng).length !== 0){
            if(!formularioIng.nombre===undefined || formularioIng.apellido===undefined || formularioIng.password===undefined){
                console.log("debe completar el formulario")
            }
        }else{
            console.log("Formulario vacio")
        }
    }

  return (
    <div>
        <h2>Fomuralio</h2>
        <form onSubmit={procesarDatos}>
            <input type="text" placeholder='Ingrese Nombre' name='nombre' className='form-control mb-2'  onChange={(e)=>formulariollenado(e)}/>
            <input type="text" placeholder='Ingrese Apellido' name='apellido' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
            <input type="password" placeholder='Contraseña' name='password' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
            <button className='btn btn-primary btn-block' type='submit'>Agregar Cuenta</button>
        </form>
    </div>
  )
}

export default Formulario