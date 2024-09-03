import { useState } from "react"
import { reqPokemon } from "../services/pokemon"

export const usePokemon = ()=>{
    const [pokemons, setPokemons] = useState([])


    const handleGetPokemon = (e,nombre) =>{
        e.preventDefault()
        reqPokemon(nombre).then((pokemons) => {
            setPokemons(pokemons)            
        })
    }

    return{
        handleGetPokemon,
        pokemons 
    }
}