import React,{ useState } from 'react' 

const Onclick = () => {
 const [saludo, setSaludo] = useState('hola como estas')

    const enventoOcnlick = ()=>{
        console.log("envento onclick")
        //alert("envento onclick")
        setSaludo('se cambio el estado')
    }

  return (

    <>
        <div>
        Eventos, {saludo}
        </div>
        <button onClick={ () => enventoOcnlick() }>Evento click</button>
    </>
  )
}

export default Onclick