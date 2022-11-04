import React, { Fragment } from 'react'

const Configuration = (props) => {
var año = 2022;
var mes = 11;
const moonLanding = new Date();

  var diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
  var cantDiaxMes = new Date(moonLanding.getFullYear(), moonLanding.getMonth()+1, 0).getDate();

  const makeNumArr = num => new Array(num).fill("").map((_, i) => {return  {numeroDia:i + 1,diaDSemana:new Date(moonLanding.getFullYear(),moonLanding.getMonth(),i + 1).toLocaleDateString('es-ES', { weekday: 'long' }),fecha:new Date(moonLanding.getFullYear(),moonLanding.getMonth(),i + 1)}});
  const arrayMes=makeNumArr(cantDiaxMes)

  function completarDias(flag){
    let num = true;
    if(flag==='iniciales'){
      return diasSemana.map((dia)=> {
        if(!num){ return undefined}
        if(dia.toLowerCase()===arrayMes[0].diaDSemana){ 
          num=false;
          return undefined
        }	
        return dia
      })
    }else{
      return diasSemana.map((dia)=> {
        if(!num){ return dia}
        if(dia.toLowerCase()===arrayMes.slice(-1)[0].diaDSemana){
          num=false;
          return undefined
        }
        if(!num){ return dia}
        return undefined
      })
    }	
  }
  const diaCompleados= {
    diasIniciales:completarDias('iniciales').filter(element => {
      return element !== undefined;
    }),
    diasFinales:completarDias().filter(element => {
      return element !== undefined;
    })
  }

  return (
    <div className='container-fluid'>
      <div className="row">
        <div class="col p-1  text-center">
          <div className="card bg-secondary">
            <div className="card-body p-1">
              <h5 className="card-title m-1">Oct</h5>
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
      <div class="col p-1  text-center">
        <div className="card bg-secondary">
          <div className="card-body p-1">
            <h5 className="card-title m-1">Dic</h5>
          </div>
        </div>
      </div>
      <div className="w-100"></div>
        {
          diasSemana.map((dia,index)=>(
            <div className="col text-center p-1" key={index}>{dia}</div>
          ))
        }
        <div className="w-100"></div>
        {
          diaCompleados.diasIniciales.map((e,i)=>(
            <div className="col text-center p-1" key={i}>
              <div className="card">
                <div className="card-body p-1">
                  <h5 className="card-title text-secondary m-1">0</h5>
                  <p className="card-text text-muted m-1"></p>
                  <div className='d-flex justify-content-around'>
                  <button type='button' className="btn btn-sm btn-dark p-1">Ver</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        {
          arrayMes.map((dia,index)=>(
            dia.diaDSemana ==='domingo'? 
              (<Fragment key={index}>
                <div className="col text-center p-1">
                  <div className="card">
                    <div className="card-body p-1">
                      <h5 className="card-title text-secondary m-1">{dia.numeroDia}</h5>
                      <p className="card-text text-muted m-1">{/*dia.diaDSemana*/}</p>
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
                      <p className="card-text text-muted m-1">{/*dia.diaDSemana*/}</p>
                      <div className='d-flex justify-content-around'>
                      <button type='button' className="btn btn-sm btn-dark p-1">Ver</button>
                      </div>
                    </div>
                  </div>
                </div>
              ) 
          ))
        }
        {
          diaCompleados.diasFinales.map((e,i)=>(
            <div className="col text-center p-1" key={i}>
              <div className="card">
                <div className="card-body p-1">
                  <h5 className="card-title text-secondary m-1">0</h5>
                  <p className="card-text text-muted m-1"></p>
                  <div className='d-flex justify-content-around'>
                  <button type='button' className="btn btn-sm btn-dark p-1">Ver</button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
        
      </div>
       Este es ek Configuration
    </div>
  )
}

export default Configuration