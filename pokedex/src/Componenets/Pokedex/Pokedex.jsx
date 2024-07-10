import PokeList from "../PokemonList/PokemonLust.jsx";
import Search from "../Search/Search.jsx";
import './Pokedex.css'
function Pokedex(){
    return (
        <div className="pokedex-wrapper">
            

            <Search />
            <PokeList />
        </div>
)
}

export default Pokedex;

