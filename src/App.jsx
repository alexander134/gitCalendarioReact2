import React,{useState,useEffect} from 'react'
import Formulario from './componentes/Formulario';
import {
  Switch,
  Route,
  Link,
  NavLink,
  withRouter
} from "react-router-dom"; 
import Login from './componente2/Login';
import Configuration from './componente2/Configuration';
import Mantenedores from './componente2/Mantenedores';
import Dashboard from './componente2/Dashboard';
import Ejemplos from './componentes/Ejemplos';
import CompApiUseEf from './componentes/CompApiUseEf';
import Navbar from './componente2/Navbar'
import {auth} from './firebase'




function App(props) {

  const [login, setlogin] = useState(false)
  const [datosUsuario, setdatosUsuario] = useState(false)
  
    useEffect(() => {//debugger
      //console.log(props.history.location.pathname)
      
      const listener = auth.onAuthStateChanged((user) => {
        //console.log(user);
        //console.log(auth.currentUser);
        if(user){
          console.log('logueado');
          setlogin(true)
          setdatosUsuario(user)
          if(props.history.location.pathname==='/login'){
            props.history.push('/dashboard')
          }
        }else{
          setlogin(false)
          setdatosUsuario(null)
          console.log('no logueado');
          if(props.history.location.pathname==='/login'){
            
          }else if(props.history.location.pathname==='/'){

          }else if(props.history.location.pathname==='/ejemplos'){

          }else{
            props.history.push('/login')
          }
          
        }
      });
  
      return () => {
        listener();
      };
    }, [props,setlogin,login])

  return datosUsuario!== false? (
    
      <div className='container mt-5- text-light- bg-dark-'>
        <Navbar login={login} datosUsuario={datosUsuario}/>
        <Switch>
          <Route exact path='/ejemplo/sUseEffect/:id'>
            <CompApiUseEf/>
          </Route>
          <Route exact path='/'>
            Pagina de inicio
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Formulario/>
          </Route>
          <Route path='/configuration'>
            <Configuration/>
          </Route>
          <Route path='/dashboard'>
            <Dashboard usuarioid={datosUsuario? datosUsuario.uid: null}/>
          </Route>
          <Route path='/mantenedores'>
            <Mantenedores/>
          </Route>
          <Route path='/ejemplos'>
            <Ejemplos/>
          </Route>
        </Switch>
      </div>
    
  ):(
    <div className='container mt-5- text-light- bg-dark-'>
      <h1>CARGANDO</h1>
    </div>
  );
}

export default withRouter(App)
