import PokemonList from '../Components/PokemonList';
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { PokemonContext } from '../core/PokemonContext';
import { MainWrapper, Pagination } from '../core/Styles'
import ReactPaginate from 'react-paginate';
import { isMobile } from 'react-device-detect'
import Loader from '../Components/Loader';


export interface PokemonType {
    name: string
    url: string
}

interface PokeApiResponse {
    count: number
    previous: string
    next: string
    results: PokemonType[]
}

export interface PokemonsByTypeApiResponse {
    pokemon: { pokemon: PokemonType }[]
}

interface PokeTypeApiResponse {
    count: number
    previous: string
    next: string
    results: PokemonType[]
}

const App = () => {

    const pokemonContext = useContext(PokemonContext);
    const { addPokemons, pokeTypes, addPokeTypes, searchValue, changeSearchValue, pageNumber, changePageNumber, pokemonCount, changePokemonCount, itemsPerPage, changeItemsPerPage, changeIsLoading, isLoading } = pokemonContext

    const [typeFilter, setTypeFilter] = useState('none')

    const fetchPokemons = async () => {
        changeIsLoading(true)
        const response = await axios.get<PokeApiResponse>(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${pageNumber * itemsPerPage}`);
        addPokemons(response.data.results)
        changePokemonCount(response.data.count)
        changeIsLoading(false)
    }

    const fetchPokemonsByType = async () => {
        const response = await axios.get<PokemonsByTypeApiResponse>(`https://pokeapi.co/api/v2/type/${typeFilter}`);
        addPokemons(response.data.pokemon.map(poke => poke.pokemon))
        changeItemsPerPage(pokemonCount);
    }

    const fetchPokemonTypes = async () => {
        const response = await axios.get<PokeTypeApiResponse>('https://pokeapi.co/api/v2/type/');
        addPokeTypes(response.data.results)
    }

    useEffect(() => {
        if (typeFilter == 'none') {
            fetchPokemons();
        } else {
            fetchPokemonsByType();
        }
    }, [pageNumber, itemsPerPage, typeFilter])

    useEffect(() => {
        fetchPokemonTypes()
    }, [])

    const changePage = ({ selected }: any) => {
        changePageNumber(selected);
    };

    const onTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setTypeFilter(e.target.value)
    }

    return (
        <MainWrapper>
            <div className='headerWrapper'>
                <input
                    onFocus={() => changeItemsPerPage(pokemonCount)}
                    className='findPokeInput'
                    type="search"
                    name="search"
                    placeholder="Find your pokemon"
                    value={searchValue}
                    onChange={e => changeSearchValue(e.target.value)} />
                <select className='selectPokeType' onChange={onTypeFilterChange}>
                    <option value='none' selected>none</option>
                    {pokeTypes.map(type => <option value={type.name} key={type.name}>{type.name}</option>)}
                </select>
            </div>
            {isLoading ? <Loader /> : <PokemonList />}
            <Pagination>
                <div>
                    <ReactPaginate
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={1}
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
            </Pagination>
            {!isMobile && <select className='itemsPerPage' onChange={(e) => (changeItemsPerPage(e.target.value), changeSearchValue(''))}>
                <option value='20'>20</option>
                <option value='40'>40</option>
                <option value='100'>100</option>
                <option value='200'>200</option>
                <option value={pokemonCount}>All</option>
            </select>}
        </MainWrapper>
    )
}

export default App;