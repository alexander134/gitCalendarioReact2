import React from 'react'
import AppRedux from './AppRedux';
import Contador from './Contador';
import Lista from './Lista';
import Onclick from './Onclick';
import Parrafo from "./Parrafo";
import SUseEffect from "./SUseEffect";

const Ejemplos = () => {
  return (
    <div className="card-body">
        <AppRedux/>
        <Contador/>
        <Lista/>
        <Onclick/>
        <Parrafo/>
        <SUseEffect/>
    </div>
  )
}

export default Ejemplos