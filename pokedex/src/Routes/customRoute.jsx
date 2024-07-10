import { Route, Routes } from "react-router-dom";
import Pokedex from "../Componenets/Pokedex/Pokedex";
import PokeDetails from "../Componenets/PokemonDetails/PokeDetails";

function CustomRoute(){
    return(
        <Routes>  
            <Route path="/" element={<Pokedex/>}/>
            <Route path="/pokemon/:id" element={<PokeDetails/>}/>
        </Routes>
    )
}
export default CustomRoute;