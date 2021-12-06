import { constants } from 'http2'
import styled from 'styled-components'
import backgroundLightImg from '../Assets/Images/backgroundLightImg.jpeg'

interface DetailsContainerProps {
    readonly direction?: string;
    readonly bg?: string
}

interface DetailsImage {
    readonly br?: string;
    readonly border?: string;
    readonly display?: string;
    src?: any;
}

interface DetailsStatProps {
    readonly bg?: string
    readonly maxWidth?: string
}

export const MainWrapper = styled("div")<{}>`
    background-image: url(${backgroundLightImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    position: relative;

    select {
        border: none;
        font-family: 'Shadows Into Light', cursive;
        font-size: 17px;
    }

    .itemsPerPage {
        position: absolute;
        bottom: 20px;
        right: 180px;
        height: 30px;
        width: 40px;
    }

    .findPokeInput {
        position: absolute; 
        top: 10px; 
        left: 0; 
        right: 0; 
        margin-left: auto; 
        margin-right: auto; 
        border: none;
        height: 30px;
        width: 190px;
    }

    .selectPokeType {
        position: absolute;
        top: 10px;
        left: 20px; 
        right: 0; 
        margin-left: 70%; 
        margin-right: auto; 
        height: 30px;
        width: 80px;
    }
`

export const ListContainerBox = styled("div")<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 83vh;
    width: 100vw;
`

export const ListContainer = styled("div")<{}>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row wrap;
    width: 80%;
    margin: 10px 0;
    padding: 4px 20px;
    max-height: 100%;
    overflow-y: auto;
    border-radius: 20px;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(135,206,250, 0.5);
    opacity: 0.9;
    width: 160px;
    height: 160px;
    margin: 16px 20px;
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

export const Pagination = styled.div`
    display: flex;
    position: absolute;
    height: 0;
    bottom: 60px;

    .paginationBttns {
        padding: 0;
        width: 80%;
        height: 40px;
        list-style: none;
        display: flex;
    }
  
    .paginationBttns a {
        padding: 6px;
        margin: 6px;
        color: white;
        cursor: pointer;
    }
    
    .paginationBttns a:hover {
        color: red;
    }
    
    .paginationActive a {
        color: blue;
    }
`

export const DetailsContainer = styled.div<DetailsContainerProps>`
    display: flex;
    flex-direction: ${props => props.direction || "row"};
    align-items: center;
    justify-content: center;
    background-color: ${props => props.bg};
`;

export const DetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 50px;
    border: 3px solid skyblue;
    border-radius: 4px;
`

export const DetailsImage = styled.img<DetailsImage>`
    width: ${props => props.width};
    heigth: ${props => props.height};
    border: ${props => props.border || "none"};
    display: ${props => props.display || "block"};
    border-radius: ${props => props.br || "none"};
`;

export const DetailsImageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DetailsStat = styled.div<DetailsStatProps>`
    background-color: ${props => props.bg};
    max-width: ${props => props.maxWidth};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    padding: 0 5px;
`

export const DetailsTypes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    padding: 0 5px;
    cursor: pointer;
`

export const DetailsText = styled.div`
    white-space: nowrap;
 `

export const PokeLoader = styled.div`
    
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: solid (50/25) black;
    position: relative;    
    background: linear-gradient(to bottom, #EEEEEE 0%,#FFFFFF 100%);;
    margin: 10px auto;
    animation: bounce 1000ms infinite;

    &:before,
    &:after{
    content: "";
    display: block;
    }
    
    &,
    &:before,
    &:after{
    transition: all 600ms cubic-bezier(.67,.4,.36,.75);
    }
    
    &:before {
    width: 50px;
    height: (50/2) -(50/25/2);
    border-bottom: solid (50p/25) black;
    border-radius: (50/2) (50/2) 0 0;
    background: linear-gradient(to bottom, #d10000 0%,#ff0000 50%);
    }
    
    &:after {
    content: "";
    width: 50/5;
    height: 50/5;
    background: linear-gradient(to bottom, #fff 0%,#ccc 100%);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    box-shadow: 0 0 0 (50/50) black,
                0 0 0 (50/25) #ddd,
                0 0 0 (50/14) black,
                0 0 (50/10) (50/17) rgba(0,0,0,0.4);
    }
    
`