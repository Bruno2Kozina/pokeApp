import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import { Background, ListContainer, ListContainerBox, ModalWrapper } from '../core/Styles'
import { useEffect } from 'react';
import axios from 'axios';
import { PokemonsByTypeApiResponse } from '../Views/App'
import { FC } from 'react';
import Loader from './Loader';

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

