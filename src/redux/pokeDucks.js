import axios from "axios";
import Pokemones from "../componentes/Pokemones";

// Constantes 
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: []
}

const OBTENER_POKEMONES_EXITO = 'OBTENER_POKEMONES_EXITO'
const SIG_POKEMONES_EXITO = 'SIG_POKEMONES_EXITO'
// Reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {...state, ...action.payload}
        case SIG_POKEMONES_EXITO:
            return {...state, ...action.payload}
        default:
            return state
    }
}

// Acciones
export const obtenerPokemonesAccion = () => async (dispatch,getState) => {
    try {
        //let previous =getState().pokemones.previous
        if(localStorage.getItem('offset=0')){
            console.log('consumio desde el local');
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem('offset=0'))
            })
            return
        }
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })
        console.log('consumio desde el api ');
        localStorage.setItem('offset=0',JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

export const siguentePokemonesAccion = () => async (dispatch,getState) => {
    try {
        let {next} =getState().pokemones
        if(localStorage.getItem(next)){
            console.log('consumio desde el local siguente');
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem(next))
            })
            return
        }
        console.log('consumio desde el api siguente');
        const res = await axios.get(next)
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
            console.log('consumio desde el local ant');
            dispatch({
                type: OBTENER_POKEMONES_EXITO,
                payload: JSON.parse(localStorage.getItem(previous))
            })
            return
        }
        console.log('consumio desde el api ant');
        const res = await axios.get(previous)
        dispatch({
            type: SIG_POKEMONES_EXITO,
            payload: res.data
        })
        localStorage.setItem(previous,JSON.stringify(res.data))
    } catch (error) {
        console.log(error)
    }
}

