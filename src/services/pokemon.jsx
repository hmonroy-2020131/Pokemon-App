export const reqPokemon = async (nombre) => {
    try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}/`);
        const data = await resp.json();
 
       
        const pokemons = {
            id: data.id,
            nombre: data.name,
            image: data.sprites.other['official-artwork'].front_default,
            altura: data.height,
            tipo: data.types.map(typeInfo => typeInfo.type.name)
,           peso: data.weight,
            experiencia: data.base_experience
        };
 
        return pokemons;
 
    } catch (err) {
        console.error(err);
        throw err;
    }
};
 
 