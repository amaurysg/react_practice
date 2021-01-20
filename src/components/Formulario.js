import React, {useState} from 'react'


const Formulario = (props) => {
  console.log(props)
  //Estados 
  const [usuario, changeUser] = useState('')
  const [password, changePassword] = useState('')
  const [email, changeEmail] = useState('')
  

/*   
  const onChangeUser = (e)=>{

    changeUser(e.target.value)
  }

  const onChangePassword = (e)=>{

    changePassword(e.target.value)
  } */


  //Funcion target value ! 
  const onChange = (e) =>{

    if(e.target.name === 'usuario'){      
    changeUser(e.target.value)
    }
    else if(e.target.name === 'password'){
    changePassword(e.target.value)
    }
    else if (e.target.name === 'email'){
    changeEmail(e.target.value)
    }
  }

  const onSubmit=(e)=>{
    
    e.preventDefault()
    alert("Sending data")
    if(usuario === "amaury" && password === '123'){
      alert("Success Datas 😀")
      props.cambiarEstadoSesion(true)

    }else{
      alert("Wrong in Data 😮")
    }


  }

  const styledForm ={
    
    backgroundColor:'gray',
    margin:'10px',
    padding: '10px',
    fontFamily: 'arial'
  }
  return (
      <form action=""  onSubmit={onSubmit} style={styledForm}>
          <p>Usuario:  {usuario} </p>
          <p>Password: {password} </p>
          <p>Email: {email} </p>
          <div>
            <label htmlFor="usuario">Usuario</label>
              <input 
              type="text" 
              name="usuario" 
              id="usuario"
              value={usuario}
              onChange={onChange}
              />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            {/* SIN TABULAR */}
              <input type="password" name="password" id="password" value={password} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            {/* SIN TABULAR */}
              <input type="email" name="email" id="email" value={email} onChange={onChange} />
          </div>
          <button type='submit'> Iniciar Sesión</button>
      </form>
  )
}


export default Formulario
