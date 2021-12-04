import styled from 'styled-components'

//GLOBAL
export const GlobalContainer = styled.div`
 
`


//Pokemon List



export const MainWrapper = styled("div")<{}>`
    background-color: orange;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    .findPokeInput {
        margin-top: 20px;
    }
`

export const ListContainerBox = styled("div")<{}>`
    display: flex;
    justify-content: center;
    height: 80vh;
    width: 100%;
    padding: 10px 0;
`

export const ListContainer = styled("div")<{}>`
    display: flex;
    flex-flow: row wrap;
    width: 70%;    
    max-height: 100%;
    justify-content: space-between;
    overflow-y: auto;
    border-radius: 20px;
`
export const Pagination = styled.div`
    display: flex;
    position: relative;
    height: 10vh;
    width: 60%;
    margin: auto;

    .paginationButtonsWrapper {
        align-items: center;
        justify-content: center;
    }

    label {
        font-size: 10px;
        color: white;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

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
`

export const InputComponent = styled.div`

    
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
    box-shadow: 0px 6px 14px -4px #000000;
    border-radius: 10px;
    transition: 0.4s;

    &:hover {
        transform: scale(1.07);
        border-radius: 20px;
        box-shadow: 0px 8px 21px 0px #000000;
      
    
  }

`

export const CardName = styled.p`
    text-align: center;
    font-variant: all-small-caps;
    font-size: 20px;
    font-weight: 600;
`

