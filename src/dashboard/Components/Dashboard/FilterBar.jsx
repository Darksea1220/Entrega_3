import React, { useContext, useState } from 'react'
import { PokemonContext } from './TuContexto'
import './FilterBar.css'

const FilterBar = () => {
  const { pokemonData, setFilteredPokemonData } = useContext(PokemonContext) // Asegúrate de tener acceso a los datos de los Pokémon y la función para actualizar el estado o contexto con los Pokémon filtrados

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

export default FilterBar
