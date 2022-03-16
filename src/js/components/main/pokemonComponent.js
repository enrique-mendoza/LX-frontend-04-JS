import * as cards from '../main/pokemonCards';
import { createTypesItems, createStatsItems, createMovesItems } from '../../helpers/helpers';

export const pokemonComponent = (data) => {
  // Inner
  const divFlipCardInner = document.createElement('div');
  divFlipCardInner.classList.add('flip-card-inner');

  // Front
  const divFlipCardFront = document.createElement('div');
  divFlipCardFront.classList.add('flip-card-front', 'pokemon');

  divFlipCardFront.innerHTML = cards.flipCardFrontContent(data);

  // Back
  const divFlipCardBack = document.createElement('div');
  divFlipCardBack.classList.add('flip-card-back');

  // Pokemon data types
  const divPokemonDataTypes = document.createElement('div');
  divPokemonDataTypes.classList.add('data');

  divPokemonDataTypes.innerHTML = cards.pokemonDataContent('Types');

  // Types list
  const ulTypes = document.createElement('ul');
  ulTypes.classList.add('data__list', 'data__list--types');

  createTypesItems(data.types, ulTypes);

  // Pokemon data stats
  const divPokemonDataStats = document.createElement('div');
  divPokemonDataStats.classList.add('data');

  divPokemonDataStats.innerHTML = cards.pokemonDataContent('Base Stats');

  // Stats list
  const ulStats = document.createElement('ul');
  ulStats.classList.add('data__list', 'data__list--stats');

  createStatsItems(data.stats, ulStats);

  // Pokemon data moves
  const divPokemonDataMoves = document.createElement('div');
  divPokemonDataMoves.classList.add('data');

  divPokemonDataMoves.innerHTML = cards.pokemonDataContent('Moves');

  // Stats list
  const ulMoves = document.createElement('ul');
  ulMoves.classList.add('data__list', 'data__list--moves');

  createMovesItems(data.moves, ulMoves);

  // Append list to pokemon data
  divPokemonDataTypes.append(ulTypes);

  // Append list to pokemon data
  divPokemonDataStats.append(ulStats);

  // Append list to pokemon data
  divPokemonDataMoves.append(ulMoves);

  // Append pokemon data to back
  divFlipCardBack.append(divPokemonDataTypes, divPokemonDataStats, divPokemonDataMoves);

  // Append front and back to inner
  divFlipCardInner.append(divFlipCardFront, divFlipCardBack);

  return divFlipCardInner;
};
