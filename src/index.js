import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import Usuario from './components/Usuario'
import Formulario from './components/Formulario'
import Count from './components/Count'
import CountFuntional from './components/CountFuntional'
//Definimos variable sesion


const App = ()=>{
  
const [sesion, cambiarEstadoSesion] = useState(true)

  return (
            <>
              { sesion === true ?
                <div>
                   <Usuario/>
               {/*     <Count /> */}
                   <CountFuntional cantidadI={20}  cantidadD={2} />
                   <button onClick={()=>cambiarEstadoSesion(false)}>Cerrar Sesión</button>
               </div>     

                 : 

               <div>
                   <p>No iniciaste</p> 
                   <Formulario  cambiarEstadoSesion={cambiarEstadoSesion} />
                  {/*  <button onClick={()=> cambiarEstadoSesion(false)}>Iniciar Sesión</button>     */}     
                   
               </div>
               }  
            </>
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


