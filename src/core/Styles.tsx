import styled from 'styled-components'
import backgroundLightImg from '../Assets/Images/backgroundLightImg.jpeg'

export const MainWrapper = styled("div")<{}>`
    background-image: url(${backgroundLightImg});
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

    .itemsPerPage {
        position: absolute;
        bottom: 30px;
        right: 300px;
        height: 30px;
        border: none;
    }

    .findPokeInput {
        margin-top: 20px;
    }
`

export const ListContainerBox = styled("div")<{}>`
    display: flex;
    justify-content: center;
    height: 80vh;
    width: 100%;
`

export const ListContainer = styled("div")<{}>`
    display: flex;
    flex-flow: row wrap;
    width: 70%;
    margin: 10px 0;
    padding: 4px 20px;
    max-height: 100%;
    justify-content: space-between;
    overflow-y: auto;
    border-radius: 20px;
`
export const Pagination = styled.div`
    display: flex;
    position: relative;
    height: 10vh;

    .paginationBttns {
        width: 80%;
        height: 40px;
        list-style: none;
        display: flex;
    }
  
    .paginationBttns a {
        padding: 6px;
        margin: 6px;
        color: blue;
        cursor: pointer;
    }
    
    .paginationBttns a:hover {
        background-color: red;
    }
    
    .paginationActive a {
        color: blue;
        background-color: red;
        border-radius: 50%;
    }
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(178,34,34, 0.7);
    opacity: 0.9;
    width: 160px;
    height: 160px;
    margin: 10px;
    box-shadow: 0px 6px 14px -4px #000000;
    border-radius: 10px;
    transition: 0.4s;

    &:hover {
        transform: scale(1.07);
        border-radius: 20px;
        opacity: 1;
        box-shadow: 0px 8px 21px 0px #000000;
    }

`

export const CardName = styled.p`
    text-align: center;
    font-variant: all-small-caps;
    font-size: 20px;
    font-weight: 600;
`