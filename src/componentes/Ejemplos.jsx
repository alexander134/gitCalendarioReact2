import React from 'react'
import Contador from './Contador';
import Lista from './Lista';
import Onclick from './Onclick';
import Parrafo from "./Parrafo";
import SUseEffect from "./SUseEffect";

const Ejemplos = () => {
  return (
    <div className="card-body">
        <Contador/>
        <Lista/>
        <Onclick/>
        <Parrafo/>
        <SUseEffect/>
    </div>
  )
}

export default Ejemplos