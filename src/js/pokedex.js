import { headerContainer } from './components/header/headerContainer';
import { mainContainer } from './components/main/mainContainer';
import { credits } from './components/footer/credits';
import {
  renderPokemonComponents,
  renderPokemonComponentByName,
  renderPokemonComponentByNumber,
} from './helpers/renders';
import { removePokemons, validateNumbers } from './helpers/helpers';

const body = document.body;
const pokemonAPI = 'https://pokeapi.co/';
let divPokemonGrid, form, searchInput;

const createHTML = () => {
  const header = document.createElement('header');
  header.classList.add('header', 'container');

  const main = document.createElement('main');
  main.classList.add('container');

  const footer = document.createElement('footer');
  footer.classList.add('footer', 'container');

  header.innerHTML = headerContainer();
  main.innerHTML = mainContainer();
  footer.innerHTML = credits(pokemonAPI);

  body.append(header, main, footer);
};

const events = () => {
  divPokemonGrid = document.querySelector('.pokemons-grid');
  form = document.querySelector('#form');
  searchInput = document.querySelector('#search');

  document.addEventListener('DOMContentLoaded', () => {
    renderPokemonComponents(divPokemonGrid);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    let search = searchInput.value;

    if (validateNumbers(search)) {
      removePokemons('flip-card');
      renderPokemonComponentByNumber(divPokemonGrid, search);
      divPokemonGrid.classList.add('pokemons-grid--only-one');
      search = '';
    } else if (search) {
      removePokemons('flip-card');
      renderPokemonComponentByName(divPokemonGrid, search);
      divPokemonGrid.classList.add('pokemons-grid--only-one');
      search = '';
    }
  });

  searchInput.addEventListener('keyup', (event) => {
    event.preventDefault();

    let search = searchInput.value;

    if (search === '') {
      removePokemons('flip-card');
      divPokemonGrid.classList.remove('pokemons-grid--only-one');
      renderPokemonComponents(divPokemonGrid);
    }
  });
};

export const init = () => {
  createHTML();
  events();
};

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event
