import { configureStore } from '@reduxjs/toolkit';
import pokemons from './slices/pokemons';
import pokemonsTypes from './slices/pokemonsTypes';

export const store = configureStore({
  reducer: { pokemons, pokemonsTypes },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});
