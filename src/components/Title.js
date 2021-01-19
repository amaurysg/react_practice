
import React, { Component } from 'react'
import ReactDOM from 'react-dom'




//Componente Title, que usaremos en dentro de comp Usuario 

const TitleRed = (props) => {
  //Definimos variables//
  console.log(props)
  const name = props.user
  const edad = props.edad
  const arrayLastName = props.array[0]
  const mystyle = {   
        color: "blue",
        backgroundColor: "red",
        padding: "10px",
        fontFamily: "Arial"
      }

  //Retornamos usando las variables 

      return (
              <h1  className="title"  style={mystyle}>Hola, {name} {arrayLastName} tienes {edad} </h1>
             )
}




const TitleBlue = ({user = 'Usuario', edad}) => {
  console.log({user, edad})
  //Definimos variables//

  const mystyle = {
    
        color: "white",
        backgroundColor: "blue",
        padding: "10px",
        fontFamily: "Arial"
      }

  //Retornamos usando las variables 

  return (
    <h1  className="title"  style={mystyle}>Hola, {user} hoy cumples {edad} </h1>
  )
}


/* class TitleBlue  extends Component {
  
  
  
  
  render(){
   const mystyle = {
      
          color: "white",
          backgroundColor: "blue",
          padding: "10px",
          fontFamily: "Arial"
        }
      return <h1  className="title" style={mystyle} >Hola, {this.props.user} hoy cumples {this.props.edad} </h1>
 }
 

 
} */

//Exportamos Titles
export {TitleRed, TitleBlue}
