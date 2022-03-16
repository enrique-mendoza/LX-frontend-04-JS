import { headerContainer } from './components/header/headerContainer';
import { mainContainer } from './components/main/mainContainer';
import { renderPokemonComponents } from './helpers/renders';

const body = document.body;
let divPokemonGrid;

const createHTML = () => {
  const header = document.createElement('header');
  header.classList.add('header', 'container');

  const main = document.createElement('main');
  main.classList.add('container');

  header.innerHTML = headerContainer();
  main.innerHTML = mainContainer();

  body.append(header, main);
};

const events = () => {
  document.addEventListener('DOMContentLoaded', () => {
    divPokemonGrid = document.querySelector('.pokemons-grid');

    renderPokemonComponents(divPokemonGrid);
  });
};

export const init = () => {
  createHTML();
  events();
};

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
