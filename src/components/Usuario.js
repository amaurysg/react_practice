import React from 'react'
import ReactDOM from 'react-dom'
import {TitleRed, TitleBlue} from './Title'


const Usuario = ()=>{

  //Definimos variables
 
  const pais = "Colombia"
 //Definí variable ejemplo de estilos 
  

//Haneles of Array
/* const friends = ['Amaury',' Julio', 'Andrés', 'Alfred'] */
const friends = [
{name:'amaury', lastName:'Soto', id: 10}, 
{ name: 'afred', lastName:'Urrego', id:20}
]


  return (
          <div>
                 
                  <TitleRed user="Amaury" edad='29' array={['Soto']} />
                  <TitleBlue user="Mario" edad='21'/>
                  <p>Ingeniero::</p>  
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
                  
               </ul>      
            </div>

  )
}

export default Usuario