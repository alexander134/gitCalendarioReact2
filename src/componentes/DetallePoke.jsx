import React, { useEffect } from 'react' 
import {useDispatch, useSelector} from 'react-redux'
import {detallePokemonAccion} from "../redux/pokeDucks";

const DetallePoke = () => {
  const dispatch=useDispatch()

  useEffect(() => {
    const fetchData =() =>{
      dispatch(detallePokemonAccion())
    }
  
    fetchData()
  }, [dispatch])
  const pkmDetalle =useSelector(store=>store.pokemones.detPokemon)
  return pkmDetalle && (
    <div className='card mt-3 mb-3 text-center'>
      <div className='card-body'>
      <img src={pkmDetalle.imagen} alt="pokemon" className="img-fluid" />
      <div className="card-title text-secondary text-uppercase">{pkmDetalle.nombre}</div>
      <p className="card-text text-secondary">Alto: {pkmDetalle.alto} - Ancho: {pkmDetalle.ancho} </p>
      </div>
    </div>
  )
}

export default DetallePoke