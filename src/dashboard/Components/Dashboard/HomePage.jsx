import React, { useContext, useEffect, useState } from 'react'
import { FilterBar, PokemonCard, Loader } from './'
import { PokemonContext } from './TuContexto'
import './HomePage.css'

const HomePage = () => {
  const { pokemonData, isLoading } = useContext(PokemonContext)

  const [filteredPokemonData, setFilteredPokemonData] = useState([])

  useEffect(() => {
    setFilteredPokemonData(pokemonData)
  }, [pokemonData])

  return (
    <div>
      <FilterBar setFilteredPokemonData={setFilteredPokemonData} />
      <div className='pokemon-list'>
        {isLoading
          ? (
            <Loader />
            )
          : (
              filteredPokemonData.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
              ))
            )}
      </div>
    </div>
  )
}

export default HomePage
