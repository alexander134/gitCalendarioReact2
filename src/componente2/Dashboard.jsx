import React, { useEffect, useState } from 'react'
import shortid from 'shortid'
import {firebase,db} from '../firebase'

const Dashboard = (props) => {
  const [formularioIng, setformularioIng] = useState({nombreAct:'',descripcion:'',fechaAct:''})
  const [formularioError, setformularioError] = useState({nombreActT:'Debe agregar un titulo',descripcionT:'Debe Agregar la descripción',fechaActT:'Debe agregar la fecha de la actividad'})
  const [modoEditar,setModoEditar]= useState(false)
  const [idEdit,setIdEdit]=useState('')
  const [actividades, setActividades] = useState([])

  const formulariollenado = (e)=>{
      setformularioIng({...formularioIng,[e.target.name]:e.target.value})
  }

  const editarDatos= async e=>{
    e.preventDefault()
    if(validacionDatos()){
        try {
            //const db = firebase.firestore()
            await db.collection('Act-'+props.usuarioid).doc(idEdit).update({nombreAct:formularioIng.nombreAct,descripcion:formularioIng.descripcion,fechaAct:formularioIng.fechaAct})
        } catch (error) {
            console.log(error)
        }
        e.target.reset()
        setformularioIng({nombreAct:'',descripcion:'',fechaAct:''})
        setIdEdit(false)
        setModoEditar(false)
        obtenerDatos()
        return
    }
}

const procesarDatos = async (e)=>{
    e.preventDefault()
    if(validacionDatos()){
      try {
          //const db = firebase.firestore()
          const data = await db.collection('Act-'+props.usuarioid).add(formularioIng)
          e.target.reset()
          setformularioIng({nombreAct:'',descripcion:'',fechaAct:''})
          obtenerDatos()
      } catch (error) {
          console.log(error)
      }
    }
}

const validacionDatos= ()=>{
  let error={}
  if(Object.keys(formularioIng).length !== 0){
      if(formularioIng.nombreAct===undefined || formularioIng.nombreAct ===''){
          error.nombreAct=true
      }else if(formularioIng.nombreAct.trim()===''){
          error.nombreAct=true
      }else{
          error.nombreAct=false
      }
      if(formularioIng.descripcion===undefined || formularioIng.descripcion ===''){
          error.descripcion=true
      }else if(formularioIng.descripcion.trim()===''){
          error.descripcion=true
      }else{
          error.descripcion=false
      }
      if(formularioIng.fechaAct===undefined || formularioIng.fechaAct ===''){
          error.fechaAct=true
      }else if(formularioIng.fechaAct.trim()===''){
          error.fechaAct=true
      }else{
          error.fechaAct=false
      }
  }else{
      error.nombreAct=true
      error.descripcion=true
      error.fechaAct=true
  }
  setformularioError({...formularioError,...error})
  if(!error.nombreAct && !error.descripcion && !error.fechaAct){
      return true
  }else{
      return false
  }
}

  const eliminarActividad= async (id)=>{
    console.log(id)
        try {
            //const db = firebase.firestore()
            await db.collection('Act-'+props.usuarioid).doc(id).delete()
        } catch (error) {
            console.log(error)
        }
    setModoEditar(false)
    setformularioIng({nombreAct:'',descripcion:'',fechaAct:''})
    obtenerDatos()
  }

  const editarActividad= (id)=>{
    const arrayfiltrado = actividades.filter(elemt => elemt.id===id)
    setformularioIng(arrayfiltrado[0])
    setIdEdit(id)
    setModoEditar(true)
  }

  const cancelarEditar= ()=>{
    setformularioError({...formularioError,...{nombreAct:false,descripcion:false,fechaAct:false}})
    setModoEditar(false)
    setformularioIng({nombreAct:'',descripcion:'',fechaAct:''})
}

  const obtenerDatos= async ()=>{
    try {
        //const db = firebase.firestore()
        const data = await db.collection('Act-'+props.usuarioid).get()
        console.log(data.docs)
        
        const arrayData =  data.docs.map(doc => ({ id:doc.id,...doc.data()}))
        setActividades(arrayData)
    } catch (error) {
       console.log(error) 
    }
}
useEffect(() => {
  obtenerDatos()
}, [])


  return (
    
    <div className='text-secondary'>
        <div className="row">
            <div className="col-6">
                <div className="row">
                    <div className="col-12 text-center pt-2"><h4>Lista Actividades</h4></div>
                    <div className="col-12">
                    <ul className='list-group'>
                    {
                        actividades.length!==0 ? (
                          actividades.map((elem)=>(
                                    <li  className='list-group-item' key={elem.id}>
                                        <span className='lead'> {elem.nombreAct} - {elem.descripcion} - {elem.fechaAct}</span>
                                        <button className='btn btn-danger btn-sm float-right mx-2' onClick={()=>eliminarActividad(elem.id)}>Eliminar</button>
                                        <button className='btn btn-warning btn-sm float-right' onClick={()=>editarActividad(elem.id)}>Editar</button>
                                    </li>
                                )) 
                        ) : (
                            <li  className='list-group-item text-center' >No hay Actividades Registradas</li>
                        )
                    }
                    </ul>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-12 text-center p-2">
                        <h4>
                        {modoEditar ? "Editar Actividad":"Formulario de Ingreso Actividad"}
                        </h4>
                    </div>
                    <div className="col-12 pb-2">
                        <form onSubmit={modoEditar ? editarDatos  : procesarDatos }>
                            { formularioError.nombreAct===true && (<div className="invalid-feedbackaa text-danger">{formularioError.nombreActT}</div>)} 
                            <input type="text" placeholder='Ingrese titulo Actividad' name='nombreAct' className='form-control mb-2' value={formularioIng.nombreAct}  onChange={(e)=>formulariollenado(e)}/>
                            { formularioError.descripcion===true && (<div className="invalid-feedbackaa text-danger">{formularioError.descripcionT}</div>)} 
                            <input type="text" placeholder='Ingrese Descripcion Actividad' name='descripcion' className='form-control mb-2' value={formularioIng.descripcion} onChange={(e)=>formulariollenado(e)} />
                            { formularioError.fechaAct===true && (<div className="invalid-feedbackaa text-danger">{formularioError.fechaActT}</div>)} 
                            <input type="date" placeholder='Fecha de Actividad' name='fechaAct' className='form-control mb-2' value={formularioIng.fechaAct} onChange={(e)=>formulariollenado(e)} />
                            {
                                modoEditar ? 
                                    <div className="row">
                                        <div className="col-6">
                                            <a className='btn btn-secondary btn-block' onClick={()=>cancelarEditar()}>Cancelar</a>
                                        </div>
                                        <div className="col-6">
                                            <button className='btn btn-warning btn-block' type='submit'>Editar Actividad</button>
                                        </div>
                                    </div>
                                :
                                <div className="row">
                                    <div className="col-12">
                                        <button className='btn btn-success btn-block ' type='submit'>Agregar Actividad</button>
                                    </div>
                                </div>   
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard