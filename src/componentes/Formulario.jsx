import React from 'react'
import { useState } from 'react'
import shortid from 'shortid'

const Formulario = () => {
const [formularioIng, setformularioIng] = useState({})
const [formularioError, setformularioError] = useState({})
const [usuario, setUsuario] = useState([])
const [modoEditar,setModoEditar]= useState(false)

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
            }else if(formularioIng.password.trim()===''){
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
            //setUsuario([...usuario, {...formularioIng, id:usuario.length+1}])
            setUsuario([...usuario, {...formularioIng, id:shortid.generate()}])
            e.target.reset()
            setformularioIng({})
            return
        }
        
    }
    const eliminarUsuario= (id)=>{
        const arrayfiltrado = usuario.filter(elemt => elemt.id!==id)
        setUsuario(arrayfiltrado)
    }

    const editarUsuario= (id)=>{
        const arrayfiltrado = usuario.filter(elemt => elemt.id===id)
        setformularioIng(arrayfiltrado)
    }

  return (
    <div>
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-12 text-center pt-2"><h4>Lista de Usuarios Registrados</h4></div>
                    <div className="col-12">
                    {
                        usuario.length!==0 ? (
                            <ul className='list-group'>
                                {
                                usuario.map((elem)=>(
                                    <li  className='list-group-item' key={elem.id}>
                                        <span className='lead'> {elem.nombre} - {elem.apellido} - {elem.password}</span>
                                        <button className='btn btn-danger btn-sm float-right mx-2' onClick={()=>eliminarUsuario(elem.id)}>Eliminar</button>
                                        <button className='btn btn-warning btn-sm float-right' onClick={()=>editarUsuario(elem.id)}>Editar</button>
                                    </li>
                                )) 
                                }
                            </ul>
                        ) : "Lista de usuarios vacia"
                    }
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-12 text-center p-2"><h4>Formulario de Ingreso</h4></div>
                    <div className="col-12 pb-2">
                        <form onSubmit={procesarDatos}>
                            <input type="text" placeholder='Ingrese Nombre' name='nombre' className='form-control mb-2' value={formularioIng.nombre}  onChange={(e)=>formulariollenado(e)}/>
                            { formularioError.nombre===true && (<div className="invalid-feedbackaa">Error!</div>)} 
                            <input type="text" placeholder='Ingrese Apellido' name='apellido' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
                            { formularioError.apellido===true && (<div className="invalid-feedbackaa">Error!</div>)} 
                            <input type="password" placeholder='Contraseña' name='password' className='form-control mb-2' onChange={(e)=>formulariollenado(e)} />
                            { formularioError.password===true && (<div className="invalid-feedbackaa">Error!</div>)} 
                            {
                                modoEditar ? (
                                    <button className='btn btn-success btn-block ' type='submit'>Editar Usuario</button>
                                ):(
                                    <button className='btn btn-success btn-block ' type='submit'>Agregar Cuenta</button>
                                )
                            }
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Formulario