import React, {useReducer}  from 'react'
import Boton from '../elementos/Boton'

//Acciones 
//{tipo: 'INCREMENTAR'}

//Estado Inicial
const initialState = {count:0}

//Reducer 
const reducer =(initialState, action)=>{
  switch(action.tipo){
     case 'INCREMENTAR':
    
       return { 
        count: initialState.count +1}
     case 'DISMINUIR':
       return {count: initialState.count -1}
     case 'REINICIAR':
       return {count: 0}
      default: 
          return initialState
       

  }
}


const ExemploUseReducer = () => {

const [state, dispatch] = useReducer(reducer, initialState)


  return (
     <div>
        <h1>Count: {state.count} </h1>
        <Boton
        onClick={()=> dispatch({tipo: 'INCREMENTAR'})}
           >
             Incrementar
           </Boton>

        <Boton 
        onClick={()=> dispatch({tipo: 'DISMINUIR'})}
        >Disminuir</Boton>


        <Boton 
        onClick={()=> dispatch({tipo: 'REINICIAR'})}
        >Reiniciar</Boton>
      </div>
  )
}



export default ExemploUseReducer

