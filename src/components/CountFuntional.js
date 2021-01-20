import React, {useState} from 'react'


const CountFuntional = ({cantidadD,cantidadI}) => {

  const [count, cambiarCuenta] = useState(0)
  
  const inc = (cantidad)=>{ cambiarCuenta(count + cantidad) }
  const dis = (cantidad)=>{ cambiarCuenta(count - cantidad) }


  return (
     <div>
        <h1>Count: {count} </h1>
        <button onClick={()=>inc(cantidadI)}>Inc</button>
        <br/>
        <br/>

        <button  onClick={()=>dis(cantidadD)}>Dis</button>
      </div>
  )
}



export default CountFuntional

