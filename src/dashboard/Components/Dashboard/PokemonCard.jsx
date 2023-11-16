import React from 'react'
import './PokemonCard.css'
const PokemonCard = ({ pokemon }) => {
  const { name, type, abilities, imageUrl } = pokemon

  return (
    <div className='pokemon-card'>
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Abilities: {abilities.join(', ')}</p>
      <img src={imageUrl} alt={`${name} Sprite`} />
    </div>
  )
}

export default PokemonCard
