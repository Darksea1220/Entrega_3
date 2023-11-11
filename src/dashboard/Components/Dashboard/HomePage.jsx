// components/Dashboard/HomePage.jsx

import React from 'react'
import { FilterBar, PokemonCard, Loader } from './'

const HomePage = () => {
  // Aquí utilizarías el contexto para obtener la lista de Pokémon y otros datos necesarios

  return (
    <div>
      <FilterBar />
      {/* Map sobre la lista de Pokémon y renderizar tarjetas */}
      <div className='pokemon-list'>
        {/* Ejemplo: */}
        {/* {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))} */}
      </div>
      <Loader />
    </div>
  )
}

export default HomePage
