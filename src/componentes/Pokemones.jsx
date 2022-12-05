import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion,siguentePokemonesAccion ,anteriorPokemonesAccion,detallePokemonAccion} from "../redux/pokeDucks";
import DetallePoke from './DetallePoke';
const Pokemones = () => {
  const dispatch=useDispatch()
  const pkm =useSelector(store=>store.pokemones.results)
  const pkmAnt= useSelector(store=>store.pokemones.previous)
  const pkmSig= useSelector(store=>store.pokemones.next)
  //console.log(pkm);
  useEffect(() => {
    const fetchData =() =>{
      dispatch(obtenerPokemonesAccion())
    }
    fetchData()
  }, [dispatch])
  return (
    <div className='container'>
        <h1>lista pokemon</h1>
        <div className='row'>
          {
            pkm.map((e)=>(
              <div className='col-3' key={e.name}>
                <div className='row'>
                  <div className='col-12 mb-3'>
                    <div className="card">
                      <img className="card-img-top img-fluid" src={e.imgPoke} alt="Card image cap"/>
                      <div className="card-body">
                        <h5 className="card-title text-secondary">{e.name}</h5>
                        <p className="card-text text-muted">{e.name}</p>
                        <div className='d-flex justify-content-around'>
                        <button type='button' className="btn btn-sm btn-dark" onClick={()=>dispatch(detallePokemonAccion(e.url))}>Ver Detalle</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
         <div className='col-12'>
            <div className='d-flex justify-content-around'>
            {
              pkm.length===0 &&
              <button type='button' className='btn btn-sm btn btn-light' onClick={()=>dispatch(obtenerPokemonesAccion())}>obtner pokemones</button>
            }
            {
              pkmAnt &&
              <button type='button' className='btn btn-sm btn btn-light' onClick={()=>dispatch(anteriorPokemonesAccion())}>Anterior pokemones</button>
            }
            {
              pkmSig &&
              <button type='button' className='btn btn-sm btn btn-light' onClick={()=>dispatch(siguentePokemonesAccion())}>siguente pokemones</button>
            }
            </div>
        </div>
        <div className='col-6'>
            <h1 className="">detalle pokemon</h1>
            <DetallePoke/>
        </div>
       </div>
    </div>
  )
}
export default Pokemones