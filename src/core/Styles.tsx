import styled from 'styled-components'
import Pokemonbackground from '../Assets/Images/Pokemon-background.png'

//GLOBAL
export const GlobalContainer = styled.div`
 
`


//Pokemon List



export const MainWrapper = styled("div")<{}>`
    height: 100vh;
    width: 100vw;
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0 0;
`


export const ListContainer = styled("div")<{}>`
    display: flex;
    flex-flow: row wrap;
    width: 75%;
    height: 100%;
    
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 160px;
    height: 160px;
    margin: 10px;
    box-shadow: 0px 8px 21px -6px #000000;
    border-radius: 10px;

    &:hover {
        transform: scale(1.1);
        border-radius: 20px;
        box-shadow: 0px 8px 21px 0px #000000;
        transition: 0.4s;
      
    
  }

`

export const CardName = styled.p`
    text-align: center;
    font-variant: all-small-caps;
    font-size: 20px;
    font-weight: 600;
`

export const Pagination = styled.div`

    position:relative;
    height: 80px;
    width: 450px;
    margin: 30px auto;

.paginationBttns {
    width: 80%;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  
  .paginationBttns a {
    padding: 6px;
    margin: 6px;
    color: white;
    cursor: pointer;
  }
  
  .paginationBttns a:hover {
    background-color: red;
  }
  
  .paginationActive a {
    color: white;
    background-color: red;
  }
`;