const allPokemonsUrl = `https://pokeapi.co/api/v2/pokemon`;
const totalPokemons = '?limit=151';

// https://medium.com/@sergio13prez/fetching-them-all-poke-api-62ca580981a2

const getKantoPokemons = async () => {
  try {
    const resp = await fetch(`${allPokemonsUrl}/${totalPokemons}`);

    if (!resp.ok) throw 'error';

    return await resp.json();
  } catch (err) {
    throw err;
  }
};

const getKantoPokemonByName = async (name) => {
  try {
    const resp = await fetch(`${allPokemonsUrl}/${name}`);

    if (!resp.ok) throw 'error';

    return await resp.json();
  } catch (err) {
    throw err;
  }
};

const getKantoPokemonByNumber = async (number) => {
  try {
    const resp = await fetch(`${allPokemonsUrl}/${number}`);

    if (!resp.ok) throw 'error';

    return await resp.json();
  } catch (err) {
    throw err;
  }
};

const getKantoPokemonsData = async (pokemon) => {
  try {
    let pokemonUrl = pokemon.url;

    const resp = await fetch(pokemonUrl);

    if (!resp.ok) throw 'error';

    return await resp.json();
  } catch (err) {
    throw err;
  }
};

export { getKantoPokemons, getKantoPokemonByName, getKantoPokemonByNumber, getKantoPokemonsData };
