import { createContext, FC, useState } from "react";

export interface IPokemon {
    name: string;
    url: string;
    nextPokemon?: string[];
}

interface IPokemonContext {
    pokemons: IPokemon[];
    addPokemons: (data: IPokemon[]) => void;
    pokeTypes: IPokemon[];
    addPokeTypes: (data: IPokemon[]) => void;
    searchValue: string;
    changeSearchValue: (data: string) => void;
    pageNumber: number;
    changePageNumber: (data: number) => void;
    pokemonCount: number;
    changePokemonCount: (data: number) => void;
    itemsPerPage: number;
    changeItemsPerPage: (data: any) => void;
    isLoading: boolean;
    changeIsLoading: (data: boolean) => void;
    pokemonsByTypes: IPokemon[];
    addPokemonsByTypes: (data: IPokemon[]) => void;
   
}

export const PokemonContext = createContext<IPokemonContext>(undefined as any);

export const PokemonProvider: FC = ({ children }) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [pokeTypes, setPoketypes] = useState<IPokemon[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [pokemonCount, setPokemonCount] = useState<number>(0);
    const [itemsPerPage, setItemsPerPage] = useState<number>(20)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [pokemonsByTypes, setPokemonsByTypes] = useState<IPokemon[]>([])

    const addPokemons = (data: IPokemon[]) => {
        setPokemons(data);
    };

    const addPokeTypes = (data: IPokemon[]) => {
        setPoketypes(data)
    }

    const changeSearchValue = (data: string) => {
        setSearchValue(data);
    };

    const changePageNumber = (data: number) => {
        setPageNumber(data);
    };

    const changePokemonCount = (data: number) => {
        setPokemonCount(data);
    };

    const changeItemsPerPage = (data: number) => {
        setItemsPerPage(data);
        setPageNumber(0)
    };

    const changeIsLoading = (data: boolean) => {
        setIsLoading(data);
    };

    const addPokemonsByTypes = (data: IPokemon[]) => {
        setPokemonsByTypes(data);
    };

    return (
        <PokemonContext.Provider value={{ pokemons, addPokemons, pokeTypes, addPokeTypes, searchValue, changeSearchValue, pageNumber, changePageNumber, pokemonCount, changePokemonCount, itemsPerPage, changeItemsPerPage, isLoading, changeIsLoading, pokemonsByTypes, addPokemonsByTypes }}>
            {children}
        </PokemonContext.Provider>
    )
}
