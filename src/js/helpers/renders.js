import { createDivComponent } from './helpers';
import * as provider from '../providers/pokemon-provider';

export const renderPokemonComponents = (divPokemonGrid) => {
  provider.getPokemonList().then((pokemons) => {
    pokemons.forEach((pokemon) => {
      provider.getPokemonProperties(pokemon).then((data) => {
        createDivComponent(divPokemonGrid, data);
      });
    });
  });
};
