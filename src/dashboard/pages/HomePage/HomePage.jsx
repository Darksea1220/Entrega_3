import { useContext, useEffect, useState } from 'react'
import { FilterBar, PokemonCard, Loader } from '../../Components'
// import { PokemonContext } from ''PokemonContext
import './HomePage.css'

export function HomePage () {
  // const { pokemonData, isLoading } = useContext()

  //! esto lo puse así para que no de error porque no sé como se supone que se va a usar lo de la linea 7
  const pokemonData = []
  const isLoading = ''
  const [filteredPokemonData, setFilteredPokemonData] = useState([])

  useEffect(() => {
    setFilteredPokemonData(pokemonData)
  }, [])

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
