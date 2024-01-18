import { createSelector } from '@reduxjs/toolkit';

const pokemonsSelector = createSelector(
  [
    (state) => state.pokemons.pokemons,
    (state) => state.pokemonsTypes.activeType,
    (state) => state.pokemons.searchPokemonTerm,
  ],
  (pokemons, filterTypes, searchTerm) => {
    if (filterTypes.length === 0) {
      return pokemons.filter((pokemon) => pokemon.name.includes(searchTerm));
    }
    return pokemons
      .filter((pokemon) =>
        pokemon.types.some((pokemonType) =>
          filterTypes.some((filterType) =>
            filterType.value === pokemonType.type.name)) && pokemon.name.includes(searchTerm)
      );
  },
);

export default pokemonsSelector;
