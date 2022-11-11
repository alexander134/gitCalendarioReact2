import { clear } from '@testing-library/user-event/dist/clear';
import React, { Fragment, useState } from 'react'
import { createRef } from 'react';

const Configuration = (props) => {

const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];

const funcArrayMesActual = (num) =>new Array(num.cantidadDias).fill(num).map((obj, i) => {
    return  {numeroDia:i + 1,diaDSemana:new Date(obj.anio,obj.mes,i + 1).toLocaleDateString('es-ES', { weekday: 'long' }),fecha:new Date(obj.anio,obj.mes,i + 1)}
  })


const llenado=(moonLanding,anioA,mesA)=>{
  debugger
  console.log("FECHA:"+moonLanding);
  console.log("AÑO:"+anioA);
  console.log("MES:"+mesA);

  const tresMeses={
    mesAnterior:Object(),
    mesActual:Object(),
    mesSiguiente:Object()
  }

  tresMeses.mesAnterior={cantidadDias:new Date(anioA, mesA, 0).getDate(),anio:new Date(anioA, mesA, 0).getFullYear(),mes:moonLanding.getMonth()-1,nombreMes:new Date(anioA, mesA, 0).toLocaleDateString('es-ES', { month: 'long' })}
  tresMeses.mesActual={cantidadDias:new Date(anioA, mesA+1, 0).getDate(),anio:moonLanding.getFullYear(),mes:moonLanding.getMonth(),nombreMes:moonLanding.toLocaleDateString('es-ES', { month: 'long' })}
  tresMeses.mesSiguiente={cantidadDias:new Date(anioA, mesA+2, 0).getDate(),anio:new Date(anioA, mesA+2, 0).getFullYear(),mes:moonLanding.getMonth()+1,nombreMes:new Date(anioA, mesA+2, 0).toLocaleDateString('es-ES', { month: 'long' })}

  tresMeses.mesActual.arrayDay=funcArrayMesActual(tresMeses.mesActual)
  tresMeses.mesAnterior.arrayDay=funcArrayMesActual(tresMeses.mesAnterior)
  tresMeses.mesSiguiente.arrayDay=funcArrayMesActual(tresMeses.mesSiguiente)
  
  let flag=true;
  tresMeses.mesActual.arrayDay=[...tresMeses.mesActual.arrayDay,
  ...tresMeses.mesSiguiente.arrayDay.map((elem)=>{
        if(flag){
          if(elem.diaDSemana=="domingo"){
            flag=false
          }
          return elem
        }return undefined
    }).filter(element => {
      return element !== undefined;
    })]

    flag=true;
    tresMeses.mesActual.arrayDay=[...tresMeses.mesAnterior.arrayDay.reverse().map((elem)=>{
      if(flag){
        if(elem.diaDSemana=="lunes"){
          flag=false
        }
        return elem
      }return undefined
  }).filter(element => {
    return element !== undefined;
  }).reverse(),...tresMeses.mesActual.arrayDay]
  return tresMeses
}

function addMonths( date = new Date(),tpo) {
  tpo==='+'?
  date.setMonth(date.getMonth() + 1) : date.setMonth(date.getMonth() - 1);
  return date;
}

addMonths(new Date(),'+')
addMonths(new Date(),'-')

//console.clear()
const [mes, setMes] = useState({tresMeses:llenado(new Date(),new Date().getFullYear(),new Date().getMonth())})

  return (
    <div className='container-fluid'>

      <div className="row">
        <div className="col-8 offset-2 align-self-center text-center p-1">
            <div className="card">
              <div className="card-body p-0">
                <h5 className="card-title text-secondary m-0">2022</h5>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-1  text-center">
          <div className="card bg-secondary">
            <div className="card-body p-1">
              <h5 className="card-title m-1" style={{cursor:'pointer'}}
               onClick={()=>setMes(addMonths(new Date(),'+'),addMonths(new Date(),'+').getFullYear(),addMonths(new Date(),'+').getMonth())}>Oct</h5>
            </div>
          </div>
        </div>
        <div className="col-8 text-center p-1">
          <div className="card">
            <div className="card-body p-1">
              <h5 className="card-title text-secondary m-1">Noviembre</h5>
            </div>
          </div>
        </div>
      <div className="col p-1  text-center">
        <div className="card bg-secondary">
          <div className="card-body p-1">
            <h5 className="card-title m-1">Dic</h5>
          </div>
        </div>
      </div>
      <div className="w-100"></div>
        {
          diasSemana.map((dia,index)=>(
            <div className="col text-center p-1" key={index}>
            <h5 className="card-title text-success m-1">{dia}</h5>
              </div>
          ))
        }
        <div className="w-100"></div>
        
        {
          mes.tresMeses.mesActual.arrayDay.map((dia,index)=>(
            dia.diaDSemana ==='domingo'? 
              (<Fragment key={index}>
                <div className="col text-center p-1">
                  <div className="card">
                    <div className="card-body p-1">
                      <h5 className="card-title text-secondary m-1">{dia.numeroDia}</h5>
                      <p className="card-text text-muted m-1">prueba</p>
                      <div className='d-flex justify-content-around'>
                      <button type='button' className="btn btn-sm btn-dark p-1">Ver</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-100"></div>
              </Fragment>)
              :
              (
                <div className="col text-center p-1" key={index}>
                  <div className="card">
                    <div className="card-body p-1">
                      <h5 className="card-title text-secondary m-1">{dia.numeroDia}</h5>
                      <p className="card-text text-muted m-1">PRUEBA2</p>
                      <div className='d-flex justify-content-around'>
                      <button type='button' className="btn btn-sm btn-dark p-1">Ver</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) 
          ))
        }
        
      </div>
       Este es ek Configuration
    </div>
  )
}

export default Configuration