import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

const SUseEffect = () => {
    const [datoApi, setDatoApi] = useState(null)
    const [datoApiC, setDatoApiC] = useState(null)
    /*const datos= [
        {nombre:'alex',apellido:'diaz'},
        {nombre:'adri',apellido:'cordero'}
    ]*/
    
    const obtenerDatos = async ()=>{
        const api= await fetch('https://jsonplaceholder.typicode.com/users')
        const user = await api.json()
        setDatoApi(user)
        //console.log(user)
    }

    const obtenerDatosCivi = async ()=>{
        // recoder activar la extencion de chrime
        const api= await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations')
        const cities = await api.json()
        setDatoApiC(cities.civilizations)
        //console.log(cities.civilizations)
    }
    useEffect(() => {
      console.log("entro al componente de useefect")
      document.title='useefect'
      obtenerDatos()
      obtenerDatosCivi()
      
    },[])

    
    
  return (
    <div>
        <h1>USER</h1>
        <ul>
        {
            datoApi?.map(user =>(
                <li key={user.id} >{user.name}-{user.phone}</li>
            ))
        }
        </ul>
        <h1>AGE OF EMPIRES</h1>
        <ul>
        {
            datoApiC?.map(Citie =>(
                <li key={Citie.id} > <Link to={`/ejemplo/sUseEffect/${Citie.id}`}> {Citie.name} - {Citie.expansion}</Link></li>
            ))
        }
        </ul>
    </div>
  )
}

export default SUseEffect