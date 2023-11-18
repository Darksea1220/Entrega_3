import React, { useState } from 'react'
// import { PokemonContext } from './TuContexto' PokemonContext
import './FilterBar.css'

export function FilterBar () {
  // const { pokemonData, setFilteredPokemonData } = useContext()

  //! misma situación del home page
  const pokemonData = ''
  const setFilteredPokemonData = ''
  const [filtroTipo, setFiltroTipo] = useState('')

  const handleTipoChange = (event) => {
    setFiltroTipo(event.target.value)
  }

  const filtrarPokemones = () => {
    const pokemonesFiltrados = pokemonData.filter((pokemon) =>
      filtroTipo ? pokemon.types.includes(filtroTipo) : true
    )

    setFilteredPokemonData(pokemonesFiltrados)
  }

  return (
    <div className='filter-bar'>
      <label htmlFor='tipo'>Filtrar por tipo:</label>
      <select id='tipo' value={filtroTipo} onChange={handleTipoChange}>
        <option value=''>Todos</option>
        <option value='grass'>Planta</option>
        <option value='fire'>Fuego</option>
        <option value='water'>Agua</option>
        <option value='electric'>Eléctrico</option>
        <option value='ice'>Hielo</option>
        <option value='psychic'>Psíquico</option>
        <option value='dark'>Siniestro</option>
        <option value='ghost'>Fantasma</option>
      </select>

      <button onClick={filtrarPokemones}>Filtrar</button>
    </div>
  )
}
