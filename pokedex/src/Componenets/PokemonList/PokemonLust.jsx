import './PokeList.css'
import Pokemon from "../Pokemo/Pokemon.jsx";
import usePokemonList from "../../hooks/usePokemonList.jsx";
function PokeList(){

    
    // const[pokemonList,setpokemonList] = useState([]);
    // const[isLoading,setisLoading] = useState(true);
    // const [pokedex_url,setpokedex_url] = useState('https://pokeapi.co/api/v2/pokemon')

    // const [nextUrl,setnextUrl] = useState('')
    // const [prevtUrl,setprevtUrl] = useState('')
    
    // async function downloadPoke(){
    //     setisLoading(true)
    //     const response = await axios.get(pokedex_url)
    //     const PokemonResult = response.data.results;
        
    //     setnextUrl(response.data.next)
    //     setprevtUrl(response.data.previous)
    //     console.log(response.data);
        
    //     const pokemonResultPromise=PokemonResult.map((pokemon)=>axios.get(pokemon.url))
    //     const pokemonData = await axios.all(pokemonResultPromise)
        
    //     const res = pokemonData.map((pokeData)=>{
    //         const pokemon = pokeData.data;
    //         return {
    //             id:pokemon.id,
    //             name:pokemon.name, 
    //             image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default: pokemon.sprites.front_shiny,
    //             types:pokemon.types
    //         }
    //     })
        
    //     console.log(res);
    //     setpokemonList(res);
    //     setisLoading(false)
    // }

    // useEffect(()=>{
    //     downloadPoke();
    // },[pokedex_url])

    const {pokemonList,setpokemonList
        ,isLoading,setisLoading
        ,pokedex_url,setpokedex_url
        ,nextUrl,setnextUrl
        ,prevtUrl,setprevtUrl} = usePokemonList();

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
                
                {(isLoading ?  'Loading ...' : 
                    pokemonList.map((p) => <Pokemon name = {p.name} image={p.image} key={p.id} id={p.id}/>)
                )}
            </div>
            <div className="controls">
                <button disabled = { prevtUrl === null} onClick={()=>setpokedex_url(prevtUrl)}>Previous</button>
                <button disabled = { nextUrl === null} onClick={()=>setpokedex_url(nextUrl)} >Next</button>

            </div>
        </div>
    )
}

export default PokeList;