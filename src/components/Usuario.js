import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {TitleRed, TitleBlue} from './Title'
import styled from 'styled-components'
import Boton from '../elementos/Boton'


const Usuario = ()=>{

  //Definimos variables
  //Definí variable ejemplo de estilos 
  
  
  //Haneles of Array
  /* const friends = ['Amaury',' Julio', 'Andrés', 'Alfred'] */
  const friends = [
    {name:'amaury', lastName:'Soto', id: 10}, 
    { name: 'afred', lastName:'Urrego', id:20}
  ]
  
    const [ pais , changePais ] = useState("Argentina")
  
  
    return (
          <div>
                 
                  <TitleRed user="Amaury" edad='29' array={['Soto']} />
                  <TitleBlue user="Mario" edad='21'/>
                  <Parrafo>Ingeniero::</Parrafo>  
                   { pais &&  <p>Tú país es: {pais} </p>     }
                    <ul>
                          {/* Handle MAP of Array Friends */}
                        {
                     
                            friends.map((friend,i) =>{
                            return <div key={i}>
                                   <li> {friend.name}</li>
                                     <p >{friend.id} </p>
                                        <p >{friend.lastName} </p>
                                  </div>
                                                    })

                      }
                  <Boton largo onClick={()=> changePais(pais + " De aquí")}>Cambiar</Boton>
               </ul>      
            </div>

  )
}

const Parrafo = styled.p`
margin-bottom: 10px;
color: red 

`

export default Usuario