export const flipCardFrontContent = (data) => {
  const contentFront = `
    <span class="pokemon__id">#${data.id}</span>
    <img src="${data.sprites.front_default}" alt="pokemon_img" class="pokemon__img" />
    <h2 class="pokemon__name">${data.name}</h2>
    `;

  return contentFront;
};

export const pokemonDataContent = (stat) => {
  const content = `<h3 class="data__title">${stat}</h3>`;

  return content;
};
