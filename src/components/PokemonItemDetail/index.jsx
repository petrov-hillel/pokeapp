import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import pokemonsSelector from '../../store/selectors/selectors';
import { changeActiveType } from '../../store/slices/pokemonsTypes';
import { searchPokemon } from '../../store/slices/pokemons';

export default function PokemonItemDetail() {
  const { id: pokemonID } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pokemons = useSelector(pokemonsSelector);

  const pokemonData = useMemo(() => pokemons.find((i) => i.id === +pokemonID), [pokemons]);

  if (!pokemonData) return <div>DONT HAVE THIS POKEMON</div>;

  const { name, types } = pokemonData;

  const changeTypeHandler = (type) => {
    navigate('/');
    dispatch(searchPokemon(''));
    dispatch(changeActiveType([{ value: type.name, label: type.name }]));
  };

  return (
    <div>
      <div>{name}</div>
      <div className="flex gap-2 justify-center">
        {
          types.map(({ type }) => (
            <button
              type="button"
              key={type.name}
              className="p-2 bg-gray-300 rounded cursor-pointer"
              onClick={() => changeTypeHandler(type)}
            >
              {type.name}
            </button>
          ))
        }
      </div>
      <button
        type="button"
        onClick={() => navigate('/')}
      >
        BACK
      </button>
    </div>
  );
}
