import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from '../Components/Pokemon';
import { IPokemon, PokemonContext } from '../core/PokemonContext';
import { Link } from 'react-router-dom';

export interface PostType {
	name: string
  url: string
}

interface PokeApiResponse {
    count: number
    previous: string
    next: string
    results: PostType[]
}

function PokemonList() {
  const pokemonContext = useContext(PokemonContext);


  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon?limit=1000&offset=200');
      pokemonContext.addPokemons(response.data.results)
    }

    fetchPokemons();
  },[])

  return (
    <div className="App">
      {pokemonContext.pokemons.map(poke => (
        
        <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
      ))}
    </div>
  );
}

export default PokemonList;
