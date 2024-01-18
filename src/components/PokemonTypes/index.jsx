import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Select from 'react-select';
import { changeActiveType, fetchPokemonsTypes } from '../../store/slices/pokemonsTypes';

export default function PokemonTypes() {
  const { pokemonsTypes, activeType } = useSelector((state) => state.pokemonsTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonsTypes());
  }, [dispatch]);

  const selectOptions = pokemonsTypes.map(({ name }) => ({
    value: name,
    label: name,
  }));

  return (
    <>
      {/* {pokemonsTypesFetchStatus === "loading" && <div>Loading types...</div>} */}
      <Select
        onChange={(value) => dispatch(changeActiveType(value))}
        options={selectOptions}
        value={activeType}
        isMulti
        className="w-96"
      />
      <Outlet />
    </>
  );
}
