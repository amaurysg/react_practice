import {useState, useEffect} from 'react'


const useObtenerArticulo = props => {

  const [articulos, establecerArticulos] = useState([])
  const [cargando, establecerCargando] = useState(true)

    useEffect(() => {
      setTimeout(()=>{
        establecerArticulos([{
            id:1, 
            titulo: 'Titulo 1 API '
          },
          {
             id:2, 
            titulo: 'Titulo 2 API'
          },
          {
             id:3, 
            titulo: 'Titulo 3 API'
          }])
          establecerCargando(false)
      }, 3000)
    }, [])

    console.log(articulos)

return [articulos, cargando]

}



export default useObtenerArticulo
