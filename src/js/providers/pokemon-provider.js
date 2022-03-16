const pokemonsUrl = `https://pokeapi.co/api/v2/pokemon?limit=151%27`;

// https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2

const getPokemonList = async () => {
  try {
    const resp = await fetch(pokemonsUrl);

    if (!resp.ok) throw 'error';

    const { results } = await resp.json();

    return results;
  } catch (err) {
    throw err;
  }
};

const getPokemonProperties = async (pokemon) => {
  try {
    let pokemonUrl = pokemon.url;
    const resp = await fetch(pokemonUrl);

    if (!resp.ok) throw 'error';

    return await resp.json();
  } catch (err) {
    throw err;
  }
};

export { getPokemonList, getPokemonProperties };
