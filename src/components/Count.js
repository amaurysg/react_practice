import React, { Component } from 'react'



class Count extends Component {

  //como agregabamos estados // 
  constructor(props){
    super(props)
   
    this.state = {
      count : 1
    }
  }

  componentDidMount(){
    console.log("El componente se cargo en el DOM")
    //Llamamos a la API 
  }
  componentDidUpdate(propsOlds, stateOlds){
    console.log("El componente se actualizo")
    console.log("Pros old", propsOlds)
    console.log("stated old", stateOlds)
  }

  componentWillUnmount(){
    console.log("Adios")
  }

  inc(){
    this.setState((estadoAnterior)=>{
     return {
       count : estadoAnterior.count + 1
     }
    })
  }
  
  dis(){
    this.setState((estadoAnterior)=>{
      return {
        count: estadoAnterior.count -1
      }
    })

  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count} </h1>
        <button onClick={() =>this.inc()}>Inc</button>
        <br/>
        <br/>

        <button onClick={() =>this.dis()}>Dis</button>
      </div>

    )
  }
}

export default Count 