import React from 'react';
import ReactDOM from 'react-dom';
import { findRenderedComponentWithType } from 'react-dom/test-utils';
import Usuario from './components/Usuario'

//Definimos variable sesion
const sesion = true
 

const App = ()=>{
  return (
              <>
                {sesion ===true ?
                 <>
                 <Usuario/>
            
               </>
                 : 
                 <p>No iniciaste</p>}            
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


