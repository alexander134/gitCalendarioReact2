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
    
      <div className='container mt-5 bg-dark1'>
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark' >Inicio</Link>
          <Link to='/register' className='btn btn-dark'>Registrar</Link>
          <Link to='/login' className='btn btn-dark'>Iniciar Sessión</Link>
          <Link to='/configuration' className='btn btn-dark'>Configuración</Link>
          <Link to='/dashboard' className='btn btn-dark'>Escritorio</Link>
          <Link to='/mantenedores' className='btn btn-dark' >Mantenedor</Link>
          <Link to='/ejemplos' className='btn btn-dark' >Ejemplos</Link>
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
