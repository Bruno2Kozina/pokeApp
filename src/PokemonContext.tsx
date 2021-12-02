import { createContext, FC, useState } from "react";

export interface IPokemon {
    name: string;
    url: string;
}

interface IPokemonContext {
    pokemons: IPokemon[];
    addPokemons: (data: IPokemon[]) => void;

}

export const PokemonContext = createContext<IPokemonContext>(undefined as any);

export const PokemonProvider: FC = ({ children }) => {
    const [pokemons, setPokemons] = useState<IPokemon[]>([]);

    const addPokemons = (data: IPokemon[]) => {
        setPokemons(data);
    };
        
    return (
        <PokemonContext.Provider value={{ pokemons, addPokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}
