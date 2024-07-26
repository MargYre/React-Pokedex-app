import React, {FunctionComponent} from 'react';
import Pokemon from '../models/pokemon';

type Props = {
    pokemon: Pokemon
}

const PokemonCard: FunctionComponent<Props> = ({pokemon}) => {
    return (
        <div>
            <p>Ce composant est chargé d'afficher le Pokemon : {pokemon.name}</p>
        </div>
    )
}
  
export default PokemonCard;