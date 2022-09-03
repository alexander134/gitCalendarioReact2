import React from 'react'
import Formulario from './componentes/Formulario';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom"; 
import Login from './componente2/Login';
import Configuration from './componente2/Configuration';
import Mantenedores from './componente2/Mantenedores';
import Dashboard from './componente2/Dashboard';
/*import Contador from './componentes/Contador';
import Lista from './componentes/Lista';
import Onclick from './componentes/Onclick';
import Parrafo from "./componentes/Parrafo";*/

function App() {
  return (
    <Router>
      <div className='container mt-5 bg-dark1'>
        <div className='btn-group'>
          <Link to='/' className='btn btn-dark' >Inicio</Link>
          <Link to='/register' className='btn btn-dark'>Registrar</Link>
          <Link to='/login' className='btn btn-dark'>Iniciar Sessión</Link>
          <Link to='/configuration' className='btn btn-dark'>Configuración</Link>
          <Link to='/dashboard' className='btn btn-dark'>Escritorio</Link>
          <Link to='/mantenedores' className='btn btn-dark' >Mantenedor</Link>
        </div>
        <hr />
        <Switch>
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
        </Switch>
        
        
        
        {/*<Parrafo/>
        <Onclick/>
        <Contador/>
      <Lista/>*/}
      </div>
    </Router>
  );
}

export default App;
