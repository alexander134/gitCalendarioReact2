import React,{ useState } from 'react'

const Lista = () => {
    const estadoInicial=[0,1]
    const estadoInicialObj=[{
        id:1,
        nombre:'alex',
        edad:"32"
    },
    {
        id:2,
        nombre:'adriana',
        edad:"32"
    }]
    const [valor, setvalor] = useState([])
    const [valorEli, setvalorEli] = useState(0)
    
    const [first, setfirst] = useState(estadoInicial)

    const [firstObj, setfirstObj] = useState(estadoInicialObj)

    const aumentar = ()=>{
        setfirst([...first,first[first.length-1]+1])
    }

    const disminuir = ()=>{
        setfirst(first.filter(u =>  u !==first[first.length-1]))
    }
    
    const agregarUsuario = ()=>{
        setfirstObj([...firstObj,{...valor,id:firstObj[firstObj.length-1].id+1}])
    }

    const eliminarUsuCamp = (e) =>{
        setvalorEli(e.target.value)
    }

    const eliminarUsuario = ()=>{
        setfirstObj(firstObj.filter(u => u.id !==parseInt(valorEli)))
    }

    const valores = (e)=>{
        setvalor({...valor,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <h2>Lista</h2>
        {
            first.map((i,index)=>(
                <h4 key={index}>{i}</h4>
            ))
        }
        <button onClick={()=>aumentar()}>Aumentar Lista+</button>
        <button onClick={()=>disminuir()}>Disminuir Lista-</button>
        <hr/>
        <hr/>
        <h2>Usuarios</h2>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                </tr>
            </thead>
            <tbody>
                
                {   
                    firstObj.map((elem,index)=>(
                        <tr key={index}>
                            <td>{elem.id}</td>
                            <td>{elem.nombre}</td>
                            <td>{elem.edad}</td>
                        </tr>
                    ))
                }
        
            </tbody>
        </table>
        <label>Nombre</label>
        <input type="text" name={'nombre'} onChange={(e)=>valores(e)}/>
        <hr/>
        <label>Edad</label>
        <input type="text" name={'edad'} onChange={(e)=>valores(e)}/>
        <hr/>
        <button onClick={()=>agregarUsuario()}>Agregar Usuario</button>
        <hr/>
        <label>ID</label>
        <input type="text" onChange={(e)=>eliminarUsuCamp(e)} />
        <button onClick={()=>eliminarUsuario()}>Eliminar Usuario</button>

    </div>
  )
}

export default Lista