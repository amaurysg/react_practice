import React, {useState, useEffect} from 'react'
import styles from './CountFuntional.module.css'


const CountFuntional = ({cantidadD,cantidadI}) => {

  const [count, cambiarCuenta] = useState(0)


  //Esto es el equivalente ComponentDidMount y ComponentDidUpdate
/*   useEffect(() => {
   console.log("Se renderizó el componente")
  
  }) */

  //Cuando agregamos [] solo se ejecuta una vez, funciona tal y cual como ComponentDidMount
 /*  useEffect(() => {
    console.log("Cargo por primera vez")
  }, []) */


//Aca se va a actualizar cada que actuialice ***count**
/*   useEffect(() => {
    console.log("El estado cambió")
  }, [count])
 */

 //Aca sacamos el componente despues de irnos, tenemos que hacer un return
useEffect(() => {
 
  return () => {
    console.log("Adios")
  }
}, [])
  
  const inc = (cantidad)=>{ cambiarCuenta(count + cantidad) }
  
  const dis = (cantidad) =>{
    cambiarCuenta(count - cantidad)
  }




  return (
     <div>
        <h1>Count: {count} </h1>
        <button className={styles.boton} 
        onClick={()=>inc(cantidadI)}>Inc</button>
        <br/>
        <br/>

        <button className={styles.boton} 
        onClick={()=>dis(cantidadD)}>Dis</button>
      </div>
  )
}



export default CountFuntional

