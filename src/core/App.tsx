
import PokemonList from '../Views/PokemonList';
import React, {useContext, useEffect} from 'react';
import axios from 'axios';
import { PokemonContext } from '../core/PokemonContext';
import { MainWrapper, Pagination} from '../core/Styles'
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

const App = () => {

    const pokemonContext = useContext(PokemonContext);
    const { pokemons, addPokemons, searchValue, changeSearchValue, pageNumber, changePageNumber, pokemonCount, changePokemonCount, itemsPerPage, changeItemsPerPage, isLoading, changeIsLoading } = pokemonContext

  useEffect(() => {
    const fetchPokemons = async () => {
        const response = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${pageNumber * itemsPerPage}`);
        addPokemons(response.data.results)
        changePokemonCount(response.data.count)
        changeIsLoading(false)
        }
        fetchPokemons();
    }, [pageNumber, itemsPerPage])

    const changePage = ({ selected }: any) => {
        changePageNumber(selected);
  };


    return (
        <MainWrapper>
            <div>
                <input 
                className='findPokeInput'
                type="search"
                name="search"
                placeholder="Find your pokemon"
                value={searchValue}
                onChange={e => changeSearchValue(e.target.value)} />
                
            </div>
            <PokemonList/>
            <Pagination>
                <div className='paginationButtonsWrapper'>
                <ReactPaginate 
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    onPageChange={changePage}
                    pageCount={pokemonCount / itemsPerPage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"} />
                </div>
                <input onBlur={(e) => changeItemsPerPage(e.target.value)} type='number' name='number'/>
                <label>items per page</label>
            </Pagination>
    </MainWrapper>
    )
}

export default App;