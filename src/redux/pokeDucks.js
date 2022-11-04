import axios from "axios";

// Constantes 
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIG_POKEMONES_EXITO = 'SIG_POKEMONES_EXITO'
const DETALLE_POKEMON_EXITO = 'DETALLE_POKEMON_EXITO'
// Reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIG_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case DETALLE_POKEMON_EXITO:
            return {...state, detPokemon:action.payload}
        default:
            return state
    }
}



// Acciones
export const obtenerPokemonesAccion = () => async (dispatch) => {
    try {
        //let previous =getState().pokemones.previous
       if(localStorage.getItem('offset=0')){
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem('offset=0'))
            })
            return
        }
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        let datos= await Promise.all(
            res.data.results.map(async  e=> {
                let res2 = await axios.get(e.url)
                return {...e,imgPoke:res2.data.sprites.front_default}
            } )
        )
        res.data.results=datos
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload:res.data
        })
        localStorage.setItem('offset=0',JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const siguentePokemonesAccion = () => async (dispatch,getState) => {
    try {
        let {next} =getState().pokemones
        if(localStorage.getItem(next)){
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem(next))
            })
            return
        }
        const res = await axios.get(next)
        let datos= await Promise.all(
            res.data.results.map(async  e=> {
                let res2 = await axios.get(e.url)
                return {...e,imgPoke:res2.data.sprites.front_default}
            } )
        )
        res.data.results=datos
        dispatch({
            type: SIG_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(next,JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const anteriorPokemonesAccion = () => async (dispatch,getState) => {
    try {
        let {previous} =getState().pokemones
        if(localStorage.getItem(previous)){
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem(previous))
            })
            return
        }
        const res = await axios.get(previous)
        let datos= await Promise.all(
            res.data.results.map(async  e=> {
                let res2 = await axios.get(e.url)
                return {...e,imgPoke:res2.data.sprites.front_default}
            } )
        )
        res.data.results=datos
        dispatch({
            type: SIG_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous,JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}


export const detallePokemonAccion = (url= "https://pokeapi.co/api/v2/pokemon/1/") => async (dispatch,getState) => {
    try {debugger;
        if(localStorage.getItem(url)){
            let data=JSON.parse(localStorage.getItem(url))
            //console.log('localstore');
            dispatch({
                type: DETALLE_POKEMON_EXITO,
                payload: {
                    nombre:data.name,
                    ancho:data.weight,
                    alto:data.height,
                    imagen:data.sprites.front_default
                }
            })
            return
        }
        const res = await axios.get(url)
        //console.log('api');
        dispatch({
            type: DETALLE_POKEMON_EXITO,
            payload: {
                nombre:res.data.name,
                ancho:res.data.weight,
                alto:res.data.height,
                imagen:res.data.sprites.front_default
            }
        })
        localStorage.setItem(url,JSON.stringify(res.data))
    } catch (error) {
        console.log(error);
    }
}
