import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPokemonTypes } from '../../data';

const initialState = {
  pokemonsTypes: [],
  pokemonsTypesFetchStatus: 'pending',
  activeType: [],
};

export const fetchPokemonsTypes = createAsyncThunk(
  'pokemons/fetchPokemonsTypes',
  async () => {
    const result = await getPokemonTypes();
    return result;
  },
);

const pokemonsTypesSlice = createSlice({
  name: 'pokemonsTypes',
  initialState,
  reducers: {
    changeActiveType: (state, action) => {
      console.log(action.payload)
      state.activeType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonsTypes.pending, (state) => {
        state.pokemonsTypesFetchStatus = 'loading';
      })
      .addCase(fetchPokemonsTypes.rejected, (state) => {
        state.pokemonsTypesFetchStatus = 'error';
      })
      .addCase(fetchPokemonsTypes.fulfilled, (state, action) => {
        state.pokemonsTypesFetchStatus = 'pending';
        state.pokemonsTypes = action.payload;
      });
  },
});

const { actions, reducer } = pokemonsTypesSlice;

export default reducer;

export const { changeActiveType } = actions;
