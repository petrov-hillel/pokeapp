import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import getID from '../../utils/getId';
import { changeActiveType } from '../../store/slices/pokemonsTypes';

export default function PokemonItem({
  id,
  name,
  height,
  weight,
  types,
}) {
  const dispatch = useDispatch();
  const idString = getID(id);
  const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`;

  return (
    <div>
      <Link to={`/pokemon/${id}`} className="flex flex-col flex-grow items-center">
        <img
          loading="lazy"
          src={imageSrc}
          alt={name}
        />
        <div className="text-yellow-400 text-center">{name}</div>
        <div>
          height:
          {height}
        </div>
        <div>
          weight:
          {weight}
        </div>
      </Link>
      <div className="flex gap-2 justify-center">
        {
          types.map(({ type }) => (
            <button
              type="button"
              key={type.name}
              className="p-2 bg-gray-300 rounded cursor-pointer"
              onClick={() => dispatch(changeActiveType([{ value: type.name, label: type.name }]))}
            >
              {type.name}
            </button>
          ))
        }
      </div>
    </div>
  );
}
