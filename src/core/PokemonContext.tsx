import { createContext, FC, useState } from "react";

export interface IPokemon {
    name: string;
    url: string;
}

interface IPokemonContext {
    pokemons: IPokemon[];
    addPokemons: (data: IPokemon[]) => void;
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

}

export const PokemonContext = createContext<IPokemonContext>(undefined as any);

export const PokemonProvider: FC = ({ children }) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);
    const [searchValue, setSearchValue] = useState<string>("");
    const [pageNumber, setPageNumber] = useState(0);
    const [pokemonCount, setPokemonCount] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState<any>(30)
    const [isLoading, setIsLoading] = useState(true);

    const addPokemons = (data: IPokemon[]) => {
        setPokemons(data);
    };

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
    };

    const changeIsLoading = (data: boolean) => {
        setIsLoading(data);
    };

    return (
        <PokemonContext.Provider value={{ pokemons, addPokemons, searchValue, changeSearchValue, pageNumber, changePageNumber, pokemonCount, changePokemonCount, itemsPerPage, changeItemsPerPage, isLoading, changeIsLoading  }}>
            {children}
        </PokemonContext.Provider>
    )
}
