import './App.css';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import PokemonList from './Views/PokemonList';
import PokemonDetails from './Views/PokemonDetails';

const App = () => {
    return (
        <Routes>
            <Route path="pokemon/:pokemonId" element={<PokemonDetails />} />
            <Route path="/" element={<PokemonList />} />
        </Routes>
    )
}

export default App;