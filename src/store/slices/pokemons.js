import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllPokemons } from '../../data';

const initialState = {
  pokemons: [],
  pokemonsFetchStatus: 'pending',
  searchPokemonTerm: '',
};

export const fetchAllPokemons = createAsyncThunk(
  'pokemons/fetchAllPokemons',
  async (offset) => {
    const result = await getAllPokemons(offset);
    return result;
  },
);

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,

  reducers: {
    searchPokemon: (state, action) => {
      state.searchPokemonTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllPokemons.pending, (state) => {
        state.pokemonsFetchStatus = 'loading';
      })
      .addCase(fetchAllPokemons.rejected, (state) => {
        state.pokemonsFetchStatus = 'error';
      })
      .addCase(fetchAllPokemons.fulfilled, (state, action) => {
        state.pokemonsFetchStatus = 'pending';
        state.pokemons = action.payload;
      });
  },
});

const { actions, reducer } = pokemonsSlice;

export const { searchPokemon } = actions;

export default reducer;
