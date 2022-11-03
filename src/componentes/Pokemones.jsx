import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion,siguentePokemonesAccion ,anteriorPokemonesAccion} from "../redux/pokeDucks";


const Pokemones = () => {
  const dispatch=useDispatch()
  const pkm =useSelector(store=>store.pokemones.results)
  const pkmAnt= useSelector(store=>store.pokemones.previous)
  const pkmSig= useSelector(store=>store.pokemones.next)
  //console.log(pkm);
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
                      <img className="card-img-top" src="..." alt="Card image cap"/>
                      <div className="card-body">
                        <h5 className="card-title text-secondary">{e.name}</h5>
                        <p className="card-text text-muted">{e.name}</p>
                        <div className='d-flex justify-content-around'>
                        <button type='button' className="btn btn-sm btn-dark">Ver Detalle</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
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
  )
}

export default Pokemones