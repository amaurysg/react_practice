import styled, {css} from 'styled-components'

const Boton = styled.button `
    background: #83d394;
    display: inline-block;
    padding: 20px;
    border-radius: 3px;
    cursor: pointer;
    border: none;
    width: ${props => props.largo ? '100%' : 'auto'};
    color: white;
    &:hover{
      background: #44a559;
      color: #fff
    }

    //Accedemos a sus props, para usar css debemos agregar {css} en el import 
    //principal
    ${props => props.orange && css `
        background: orange; 
        color: #fff

    ` }
    ${props => props.rojo && css `
        background: red; 
        color: #fff

    ` }

`;
export default Boton