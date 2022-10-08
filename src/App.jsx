import React from 'react'
import Formulario from './componentes/Formulario';
import {
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"; 
import Login from './componente2/Login';
import Configuration from './componente2/Configuration';
import Mantenedores from './componente2/Mantenedores';
import Dashboard from './componente2/Dashboard';
import Ejemplos from './componentes/Ejemplos';
import CompApiUseEf from './componentes/CompApiUseEf';


function App() {
  return (
    
      <div className='container mt-5 text-light bg-dark'>
        <div className='btn-group'>
          <NavLink to='/' className='btn btn-light' >Inicio</NavLink>
          <NavLink to='/register' className='btn btn-light' activeClassName='active'>Registrar</NavLink>
          <NavLink to='/login' className='btn btn-light' activeClassName='active'>Iniciar Sessión</NavLink>
          <NavLink to='/configuration' className='btn btn-light' activeClassName='active'>Configuración</NavLink>
          <NavLink to='/dashboard' className='btn btn-light' activeClassName='active'>Escritorio</NavLink>
          <NavLink to='/mantenedores' className='btn btn-light' activeClassName='active'>Mantenedor</NavLink>
          <NavLink to='/ejemplos' className='btn btn-light' activeClassName='active'>Ejemplos</NavLink>
        </div>
        <hr />
        <Switch>
          <Route exact path='/ejemplo/sUseEffect/:id'>
            <CompApiUseEf/>
          </Route>
          <Route exact path='/'>
            Pagina de inicio
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/register'>
            <Formulario/>
          </Route>
          <Route path='/configuration'>
            <Configuration/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard/>
          </Route>
          <Route path='/mantenedores'>
            <Mantenedores/>
          </Route>
          <Route path='/ejemplos'>
            <Ejemplos/>
          </Route>
        </Switch>
      </div>
    
  );
}

export default App;
