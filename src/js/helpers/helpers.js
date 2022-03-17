import { pokemonComponent } from '../components/main/pokemonComponent';

export const createDivComponent = (divPokemonGrid, data) => {
  const divFlipCard = document.createElement('div');

  divFlipCard.classList.add('flip-card');
  divFlipCard.append(pokemonComponent(data));

  divPokemonGrid.append(divFlipCard);
};

export const createTypesItems = (types, ul) => {
  types.forEach((type) => {
    let typeListItem = document.createElement('li');
    typeListItem.classList.add('data__item');
    typeListItem.innerText = type['type']['name'];
    ul.append(typeListItem);
  });
};

export const createStatsItems = (stats, ul) => {
  for (let i = 0; i < stats.length; i++) {
    if (i < 3) {
      let statListItem = document.createElement('li');
      statListItem.classList.add('data__item');
      statListItem.innerText = stats[i]['base_stat'];
      ul.append(statListItem);
    }
  }
};

export const createMovesItems = (moves, ul) => {
  for (let i = 0; i < moves.length; i++) {
    if (i < 3) {
      let moveListItem = document.createElement('li');
      moveListItem.classList.add('data__item');
      moveListItem.innerText = moves[i]['move']['name'];
      ul.append(moveListItem);
    }
  }
};

export const removePokemons = (divClassName) => {
  document.querySelectorAll(`.${divClassName}`).forEach((e) => e.remove());
};

export const validateNumbers = (id) => {
  const pattern = /^[0-9]$/;

  return pattern.test(id);
};
