import axios from "axios";
import { useEffect, useState } from "react";

function usePokemonList(url,type){
    const[pokemonList,setpokemonList] = useState([]);
    const[isLoading,setisLoading] = useState(true);
    const [pokedex_url,setpokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')

    const [nextUrl,setnextUrl] = useState('')
    const [prevtUrl,setprevtUrl] = useState('')
    


    async function downloadPoke(){
        setisLoading(true)
        const response = await axios.get(pokedex_url)
        const PokemonResult = response.data.results;
        // console.log('Response is ',response);
        setnextUrl(response.data.next)
        setprevtUrl(response.data.previous)
        console.log(response.data);
        
        if(type){
            setpokedex_url(url)
            setpokemonList(response.data.pokemon.slice(0,5))
        } else{


                const pokemonResultPromise=PokemonResult.map((pokemon)=>axios.get(pokemon.url))
                const pokemonData = await axios.all(pokemonResultPromise)
                
                const res = pokemonData.map((pokeData)=>{
                    const pokemon = pokeData.data;
                    return {
                        id:pokemon.id,
                        name:pokemon.name, 
                        image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
                        types:pokemon.types
                    }
                })
                
                console.log(res);
                setpokemonList(res);
                setisLoading(false)
        
            }
        }

    useEffect(()=>{
        downloadPoke();
    },[pokedex_url])

    return {pokemonList,setpokemonList
        ,isLoading,setisLoading
        ,pokedex_url,setpokedex_url
        ,nextUrl,setnextUrl
        ,prevtUrl,setprevtUrl
    }
}

export default usePokemonList;