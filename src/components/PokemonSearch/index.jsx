import React from 'react';
import { useDispatch } from 'react-redux';
import { searchPokemon } from '../../store/slices/pokemons';

export default function PokemonSearch() {
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    dispatch(searchPokemon(e.target.value));
  };
  return (
    <div>
      <input type="text" onChange={inputHandler} />
    </div>
  );
}
