import React, {useContext} from 'react';
import Pokemon from '../Components/PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import { ListContainer, ListContainerBox } from '../core/Styles'

export interface PostType {
	name: string
  url: string
}

function PokemonList() {
  const pokemonContext = useContext(PokemonContext);

  return (
    
      <ListContainerBox>
        <ListContainer>
          {pokemonContext.pokemons.filter((poke) => {
            if (pokemonContext.searchValue == "") {
              return poke
            } else if (poke.name.toLowerCase().includes(pokemonContext.searchValue.toLowerCase()))
              return poke
          }).map(poke => (
            <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
          ))}
        </ListContainer>
      </ListContainerBox>
  );
}

export default PokemonList;
