import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Pokedetails.css'
import usePokemonList from "../../hooks/usePokemonList";
function PokeDetails(){
    
    const {id} = useParams();
    const [pokemon,setpokemon] = useState({})
    async function downloadPokemon(){
        const response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(response.data);
        setpokemon({
            name:response.data.name,
            image:response.data.sprites.other.dream_world.front_default,
            weight:response.data.weight,
            height:response.data.height,
            types:response.data.types.map((t)=>t.type.name),
        })
    }

    const {pokemonList} = usePokemonList('https://pokeapi.co/api/v2/type/fire',true)

    useEffect(()=>{
        downloadPokemon()
    },[]);
        
    return(
        <div className="pokedetails-wrapper">
            <div className="pokemon-details-name">Name:<span>{pokemon.name}</span></div>
            <img src={pokemon.image} className="pokemon-image"/>
            <div className="pokemon-details-name">Height:{pokemon.height}</div>
            <div className="pokemon-details-name">weight:{pokemon.weight}</div>
            <div className="pokemon-details-type">
                {pokemon.types && pokemon.types.map((t) =>
                    <div key={t}> {t} </div>
                )}
            </div>

            <div>
                More Fire type pokemon
                <ul>
                    {pokemonList && pokemonList.map((p)=><li key={p.pokemon.url}>{p.pokemon.name}</li>)}
                </ul>
            </div>
        </div>
    )    
}


export default PokeDetails;