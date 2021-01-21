
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styles from './CountFuntional.module.css'
import  Boton from '../elementos/Boton'
import Title from '../elementos/Title'




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
              <div>
                <Title>Hola, {name} {arrayLastName} tienes: {edad} </Title>
                <Boton orange>Test Botón</Boton>
              </div>
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
    <Title>Hola, {user} hoy cumples {edad} </Title>
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
