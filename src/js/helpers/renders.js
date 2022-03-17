import { createDivComponent } from './helpers';
import * as provider from '../providers/pokemon-provider';

export const renderPokemonComponents = (divPokemonGrid) => {
  provider.getKantoPokemons().then((pokemons) => {
    pokemons.results.forEach((pokemon) => {
      provider.getKantoPokemonsData(pokemon).then((data) => {
        createDivComponent(divPokemonGrid, data);
      });
    });
  });
};

export const renderPokemonComponentByName = (divPokemonGrid, name) => {
  provider.getKantoPokemonByName(name).then((data) => {
    createDivComponent(divPokemonGrid, data);
  });
};

export const renderPokemonComponentByNumber = (divPokemonGrid, number) => {
  provider.getKantoPokemonByName(number).then((data) => {
    createDivComponent(divPokemonGrid, data);
  });
};
