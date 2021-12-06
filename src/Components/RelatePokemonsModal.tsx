import React, { useContext, useRef } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import { ListContainer, ListContainerBox } from '../core/Styles'
import styled from 'styled-components'
import { useEffect } from 'react';
import axios from 'axios';
import { PokemonsByTypeApiResponse } from '../Views/App'
import { FC } from 'react';
import Loader from './Loader';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    display: flex;
    width: 70vw;
    height: 80vh;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
`;


interface IProps {
    typeName: string;
    onClose: () => void;
}



const RelatePokemonsModal: FC<IProps> = ({ onClose, typeName }) => {

    const pokemonContext = useContext(PokemonContext);
    const { isLoading, addPokemons, changeIsLoading } = pokemonContext

    const fetchPokemonsByType = async () => {
        const response = await axios.get<PokemonsByTypeApiResponse>(`https://pokeapi.co/api/v2/type/${typeName}`);
        addPokemons(response.data.pokemon.map(poke => poke.pokemon))
        changeIsLoading(false)
    }

    useEffect(() => {
        fetchPokemonsByType()
    }, [])


    return (
        <Background onClick={onClose}>
            <ModalWrapper>
                {isLoading ? <Loader /> : <ListContainerBox>
                    <ListContainer>
                        {pokemonContext.pokemons.map((poke, i) => (
                            <PokemonCard name={poke.name} url={poke.url} key={i} />
                        ))}
                    </ListContainer>
                </ListContainerBox>}
            </ModalWrapper>
        </Background>
    );
}

export default RelatePokemonsModal

