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
import Navbar from './componente2/Navbar'

function App() {
  return (
    
      <div className='container mt-5- text-light- bg-dark-'>
        <Navbar/>
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
