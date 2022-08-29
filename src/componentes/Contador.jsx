import React from 'react'
import OperadorTernario from './OperadorTernario'

const Contador = () => {
    const [constador, setconstador] = React.useState(0)

    const aumentar = ()=>{
        setconstador(constador+1)
    }

    const disminuir = ()=>{
        setconstador(constador-1)
    }
    
  return (
    <>
        <div>El contador esta en :{constador}</div>
        <button onClick={()=>aumentar()}>Aumentar +</button>
        <button onClick={()=>disminuir()}>Disminuir -</button>
        <OperadorTernario valor={constador} />
    </>
  )
}

export default Contador