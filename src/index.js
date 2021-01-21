import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import Usuario from './components/Usuario'
import Formulario from './components/Formulario'
import Count from './components/Count'
import CountFuntional from './components/CountFuntional'
import './index.css'
import Boton from './elementos/Boton'
import ExemploUseReducer from './components/ExemploUseReducer'
import Blog from './components/Blog'

//Definimos variable sesion


const App = ()=>{
  
const [sesion, cambiarEstadoSesion] = useState(false)

  return (
            <div className="contenedor"> 
              { sesion === true ?
                <div>
                   <Usuario/>
                    <Blog/>
                  {/*  <Count /> */}
                  {/*  <CountFuntional cantidadI={20}  cantidadD={2} />  */}
                  <ExemploUseReducer/>
                   <Boton largo rojo onClick={()=>cambiarEstadoSesion(false)}>Cerrar Sesión</Boton>
               </div>     

                 : 

               <div>
              
                   <Formulario  cambiarEstadoSesion={cambiarEstadoSesion} />
                  {/*  <button onClick={()=> cambiarEstadoSesion(false)}>Iniciar Sesión</button>     */}     
                   
               </div>
               }  
            </div>
            ) 

}

/* const verification = (sesion)=>{
  if (sesion === true){
    return JSX
  }else {
    return <h1>No iniciaste</h1>
  }
}

ReactDOM.render( verification(sesion),  document.getElementById('root')); */
ReactDOM.render( <App/>,  document.getElementById('root'));


