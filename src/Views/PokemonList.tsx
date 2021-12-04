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

  const {isLoading, pokemons, searchValue} = pokemonContext

  return (
    
      <ListContainerBox>
        {isLoading ? 
        <div>
          ASDASDASD
        </div>
        :
        <ListContainer>
          {pokemons.filter((poke) => {
            if (searchValue == "") {
              return poke
            } else if (poke.name.toLowerCase().includes(searchValue.toLowerCase()))
              return poke
          }).map(poke => (
            <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
          ))}
        </ListContainer>}
      </ListContainerBox>
  );
}

export default PokemonList;
