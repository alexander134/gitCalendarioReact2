import React, { Fragment, useState } from 'react'

const Configuration = (props) => {
const diasSemana = [
{diaL:'Lunes',diaM:'Lun',diaC:'L'},
{diaL:'Martes',diaM:'Mar',diaC:'M'},
{diaL:'Miércoles',diaM:'Mié',diaC:'M'},
{diaL:'Jueves',diaM:'Jue',diaC:'J'},
{diaL:'Viernes',diaM:'Vie',diaC:'V'},
{diaL:'Sábado',diaM:'Sáb',diaC:'S'},
{diaL:'Domingo',diaM:'Dom',diaC:'D'}];
const funcArrayMesActual = (num) =>new Array(num.cantidadDias).fill(num).map((obj, i) => {
    return  {
      numeroDia:i + 1,
      diaDSemana:new Date(obj.anio,obj.mes===-1?11:obj.mes===12?0:obj.mes,i + 1).toLocaleDateString('es-ES', { weekday: 'long' }),
      nombreMes:new Date(obj.anio,obj.mes===-1?11:obj.mes===12?0:obj.mes,i + 1).toLocaleDateString('es-ES', { month: 'long' }),
      fecha:new Date(obj.anio,obj.mes===-1?11:obj.mes===12?0:obj.mes,i + 1),
      nombreCorMes:new Date(obj.anio,obj.mes===-1?11:obj.mes===12?0:obj.mes,i + 1).toLocaleDateString('es-ES', { month: 'short' })
    }
  })
  const llenado=(moonLanding)=>{
    let anioA =moonLanding.getFullYear()
    let mesA =moonLanding.getMonth()
    const tresMeses={
      mesAnterior:Object(),
      mesActual:Object(),
      mesSiguiente:Object()
    }
    tresMeses.mesAnterior={
      fecha:new Date(anioA, mesA, 0),
      cantidadDias:new Date(anioA, mesA, 0).getDate(),
      anio:new Date(anioA, mesA, 0).getFullYear(),
      mes:moonLanding.getMonth()-1,
      nombreMes:new Date(anioA, mesA, 0).toLocaleDateString('es-ES', { month: 'long' }),
      nombreCorMes:new Date(anioA, mesA, 0).toLocaleDateString('es-ES', { month: 'short' })
    }
    tresMeses.mesActual={
      fecha:new Date(anioA, mesA+1, 0),
      cantidadDias:new Date(anioA, mesA+1, 0).getDate(),
      anio:moonLanding.getFullYear(),
      mes:moonLanding.getMonth(),
      nombreMes:moonLanding.toLocaleDateString('es-ES', { month: 'long' }),
      nombreCorMes:moonLanding.toLocaleDateString('es-ES', { month: 'short' })
    }
    tresMeses.mesSiguiente={
      fecha:new Date(anioA, mesA+2, 0),
      cantidadDias:new Date(anioA, mesA+2, 0).getDate(),
      anio:new Date(anioA, mesA+2, 0).getFullYear(),
      mes:moonLanding.getMonth()+1,
      nombreMes:new Date(anioA, mesA+2, 0).toLocaleDateString('es-ES', { month: 'long' }),
      nombreCorMes:new Date(anioA, mesA+2, 0).toLocaleDateString('es-ES', { month: 'short' })
    }
    tresMeses.mesActual.arrayDay=funcArrayMesActual(tresMeses.mesActual)
    tresMeses.mesAnterior.arrayDay=funcArrayMesActual(tresMeses.mesAnterior)
    tresMeses.mesSiguiente.arrayDay=funcArrayMesActual(tresMeses.mesSiguiente)
    let flag= tresMeses.mesActual.arrayDay[tresMeses.mesActual.arrayDay.length-1].diaDSemana=='domingo' ? false:true;
    if(flag){
    tresMeses.mesActual.arrayDay=[...tresMeses.mesActual.arrayDay,
    ...tresMeses.mesSiguiente.arrayDay.map((elem)=>{
          if(flag){
            if(elem.diaDSemana==="domingo"){
              flag=false
            }
            return {...elem,...{otroMes:true}}
          }return undefined
      }).filter(element => {
        return element !== undefined;
      })]
    }
      flag= tresMeses.mesActual.arrayDay[0].diaDSemana==='lunes' ? false:true;
      if(flag){
      tresMeses.mesActual.arrayDay=[...tresMeses.mesAnterior.arrayDay.reverse().map((elem)=>{
        if(flag){
          if(elem.diaDSemana==="lunes"){
            flag=false
          }
          return {...elem,...{otroMes:true}}
        }return undefined
    }).filter(element => {
      return element !== undefined;
    }).reverse(),...tresMeses.mesActual.arrayDay]
  }
  console.log(tresMeses);
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
const [mes, setMes] = useState({tresMeses:llenado(new Date())})
  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col-8 offset-2 align-self-center text-center p-1">
            <div className="card">
<div className="card-body p-0">
                <h5 className="card-title text-secondary m-0">{mes.tresMeses.mesActual.anio}</h5>
              </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col p-1  text-center">
          <div className="card bg-secondary">
            <div className="card-body p-1">
              <h5 className="card-title m-1" style={{cursor:'pointer'}}
               onClick={()=>setMes({tresMeses:llenado(mes.tresMeses.mesAnterior.fecha)})}>{mes.tresMeses.mesAnterior.nombreCorMes}</h5>
            </div>
          </div>
        </div>
        <div className="col-8 text-center p-1">
          <div className="card">
            <div className="card-body p-1">
              <h5 className="card-title text-secondary m-1">{mes.tresMeses.mesActual.nombreMes}</h5>
            </div>
          </div>
        </div>
      <div className="col p-1  text-center">
        <div className="card bg-secondary">
          <div className="card-body p-1">
          <h5 className="card-title m-1" style={{cursor:'pointer'}}
               onClick={()=>setMes({tresMeses:llenado(mes.tresMeses.mesSiguiente.fecha)})}>{mes.tresMeses.mesSiguiente.nombreCorMes}</h5>
          </div>
        </div>
      </div>
      <div className="w-100"></div>
        {
          diasSemana.map((dia,index)=>(
            <div className="col text-center p-1" key={index}>
            <h5 className="card-title text-success m-1">{dia.diaM}</h5>
              </div>
          ))
        }
        <div className="w-100"></div>
        {
          mes.tresMeses.mesActual.arrayDay.map((dia,index)=>(
            dia.diaDSemana ==='domingo'? 
              (<Fragment key={index}>
                <div className="col text-center p-1">
                  <div className={`card ${dia.otroMes? "diaOscuro":""  }`} >
                    <div className="card-body p-1">
                      <h5 className={`card-title m-1 ${dia.otroMes? "text-light":"text-secondary"  }`}>{dia.numeroDia}</h5>
                      <p className={`card-text m-1 ${dia.otroMes? "text-light":"text-muted"  }`}>{dia.otroMes && dia.nombreCorMes}</p>
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
                  <div className={`card ${dia.otroMes? "diaOscuro":""  }`} >
                    <div className="card-body p-1">
                      <h5 className={`card-title m-1 ${dia.otroMes? "text-light":"text-secondary"  }`}>{dia.numeroDia}</h5>
                      <p className={`card-text  m-1 ${dia.otroMes? "text-light":"text-muted"  }`}>{dia.otroMes && dia.nombreCorMes}</p>
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
