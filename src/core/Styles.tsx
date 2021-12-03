import styled from 'styled-components'
import Pokemonbackground from '../Assets/Images/Pokemon-background.png'



//Pokemon List



export const MainWrapper = styled("div")<{}>`
    height: 100%;
    width: 100%;
    background-color: orange;
    display: flex;
    position: relative;
`


export const ListContainer = styled("div")<{}>`
    display: flex;
    flex-flow: row wrap;
    width: 75%;
    align-self: flex-end;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 200px;
    height: 200px;
    margin: 20px;
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


