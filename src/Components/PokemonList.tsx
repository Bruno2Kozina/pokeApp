import React, { useContext } from 'react';
import PokemonCard from './PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import { ListContainer, ListContainerBox } from '../core/Styles'

const PokemonList = () => {
    const pokemonContext = useContext(PokemonContext);

    return (
        <ListContainerBox>
            <ListContainer>
                {pokemonContext.pokemons.filter((poke) => {
                    if (pokemonContext.searchValue == "") {
                        return poke
                    } else if (poke.name.toLowerCase().includes(pokemonContext.searchValue.toLowerCase()))
                        return poke
                }).map((poke, i) => (
                    <PokemonCard name={poke.name} url={poke.url} key={i} />
                ))}
            </ListContainer>
        </ListContainerBox>
    );
}

export default PokemonList;