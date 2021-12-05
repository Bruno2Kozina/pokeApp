import PokemonList from '../Views/PokemonList';
import React, {useContext, useEffect, useState} from 'react';
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

interface PokeTypeApiResponse {
    count: number
    previous: string
    next: string
    results: PostType[]
}

const App = () => {

    const pokemonContext = useContext(PokemonContext);
    const { pokemons, addPokemons, pokeTypes, addPokeTypes, searchValue, changeSearchValue, pageNumber, changePageNumber, pokemonCount, changePokemonCount, itemsPerPage, changeItemsPerPage, changeIsLoading } = pokemonContext

    const [nextResponse, setNextResponse] = useState('')
    const [hasMore, setHasMore] = useState(true)
    
    useEffect(() => {
        const fetchPokemons = async () => {
            const response = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${pageNumber * itemsPerPage}`);
            addPokemons(response.data.results)
            changePokemonCount(response.data.count)
            changeIsLoading(false)
            setNextResponse(response.data.next)
            }
        fetchPokemons();
    }, [pageNumber, itemsPerPage])

    useEffect(() => {
        const fetchPokemonTypes = async () => {
            const response = await axios.get<PokeTypeApiResponse>('https://pokeapi.co/api/v2/type/');
            addPokeTypes(response.data.results)
        }
        fetchPokemonTypes()
    }, [])

    const changePage = ({ selected }: any) => {
        changePageNumber(selected);
    };

    return (
        <MainWrapper>
            <div>
                <input 
                onFocus={() => changeItemsPerPage(pokemonCount)} // only solution to search from list of all pokemons
                className='findPokeInput'
                type="search"
                name="search"
                placeholder="Find your pokemon"
                value={searchValue}
                onChange={e => changeSearchValue(e.target.value)} />
                
            </div>
            <select>
                 {pokeTypes.map(type => <option>{type.name}</option>)}    
            </select>
            <PokemonList key={Math.random() * 100}/>
            <Pagination>
                {(itemsPerPage < pokemonCount) && <div>
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
                </div>}
            </Pagination>
            <select className='itemsPerPage' onChange={(e) => changeItemsPerPage(e.target.value)}>
                <option value='20'>20</option>
                <option value='40'>40</option>
                <option value='100'>100</option>
                <option value='200'>200</option>
                <option value={pokemonCount}>All</option>
            </select>
    </MainWrapper>
    )
}

export default App;