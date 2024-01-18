import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonList from '../PokemonList';
// import PokemonTypes from '../PokemonTypes';
import PokemonItemDetail from '../PokemonItemDetail';
import NoMatch from '../NoMatch/NoMatch';

function App() {
  return (
    <div className="container mx-auto">
      <Routes>
        <Route path="/">
          <Route index element={<PokemonList />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="/pokemon/">
          <Route path=":id" element={<PokemonItemDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
