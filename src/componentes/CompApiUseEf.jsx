import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const CompApiUseEf = () => {
    const [pueblo, setpueblo] = useState(null)
    const {id}=useParams()
    //console.log(id)
    
    useEffect(() => {
        const obtenerDatosprueblo = async ()=>{
            const api= await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
            const pueblo = await api.json()
            //console.log(pueblo);
            setpueblo(pueblo)
        }
      obtenerDatosprueblo()
    },[id])

    
    
    //console.log(id)
  return (
    <div>
        {pueblo ? (
            <div>
                <h3>{pueblo.name}</h3>
                <h4>army_type: {pueblo.army_type}</h4>
                <h4>civilization_bonus:</h4>
                <ul>
                {pueblo.civilization_bonus.map((cb,index) =>(
                    <li key={index}>{cb}</li>
                ))}
                </ul>
                <h4>expansion:{pueblo.expansion}</h4>
                <h4>team_bonus:{pueblo.team_bonus}</h4>
            </div>
        ):(
            <h3>Sin datos</h3>
        )}
       
    </div>
  )
}

export default CompApiUseEf