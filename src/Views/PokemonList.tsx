import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Pokemon from '../Components/PokemonCard';
import { PokemonContext } from '../core/PokemonContext';
import {ListContainer, MainWrapper, Pagination} from '../core/Styles'
import ReactPaginate from 'react-paginate';

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
  const [searchValue, setSearchValue] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(0);
  const [pokemonNumber, setPokemonNumber] = useState(0)

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=18&offset=${pageNumber * 18}`);
      pokemonContext.addPokemons(response.data.results)
      setPokemonNumber(response.data.count)
    }
    fetchPokemons();
  }, [pageNumber])

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <MainWrapper>
      <input 
        style={{height: '20px'}} 
        type="text"
        name="search"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)} />
      <ListContainer>
        {pokemonContext.pokemons.filter((poke) => {
          if (searchValue == "") {
            return poke
          } else if (poke.name.toLowerCase().includes(searchValue.toLowerCase()))
            return poke
        }).map(poke => (
          <Pokemon name={poke.name} url={poke.url} key={poke.name}/>
        ))}
      </ListContainer>
      <Pagination>
      <ReactPaginate 
          previousLabel={"Previous"}
          nextLabel={"Next"}
          onPageChange={changePage}
          pageCount={pokemonNumber / 18}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"} />
      </Pagination>
    </MainWrapper>
  );
}

export default PokemonList;
