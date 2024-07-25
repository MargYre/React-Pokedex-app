import React, {FunctionComponent, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => { // FunctionComponent is a type of Function that returns JSX.Element.
 const [pokemons] = useState<Pokemon[]>(POKEMONS);
    
 return (
    <div>
        <h1>Pokedex</h1>
        <p>Il y  a {pokemons.length} pokémon dans le Pokedex.</p>
    </div>
 )
}
  
export default App;