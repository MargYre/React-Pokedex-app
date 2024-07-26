import React, {FunctionComponent, useState, useEffect} from 'react';
import PokemonList from './pages/pokemon-list';
  
const App: FunctionComponent = () => { // FunctionComponent is a type of Function that returns JSX.Element.

 return (
        <PokemonList />
 )
}
  
export default App;