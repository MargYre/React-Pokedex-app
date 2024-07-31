import React, {FunctionComponent, useState, useEffect} from 'react';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
  
const App: FunctionComponent = () => { // FunctionComponent is a type of Function that returns JSX.Element.

 return (
 <Router>
       <div>
              {/* */}
              <nav>
                     <div className='nav-wrapper teal'>
                            <Link to="/" className='brand-logo center'> Pokédex </Link>
                     </div>
              </nav>
              {/* */}
              <Switch>
                     <Route exact path="/" component={PokemonList}/>
                     <Route exact path="/pokemons" component={PokemonList}/>
                     <Route exact path="/pokemons/:id" component={PokemonDetail}/>
              </Switch>
       </div>
 </Router>
 )
}
  
export default App;