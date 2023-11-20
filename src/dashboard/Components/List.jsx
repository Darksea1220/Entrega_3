// import { Useform } from '../../aut/Hooks/useForm'
import { PokemonCard } from './PokemonCard/PokemonCard'

export function List () {
  // const { pokes } = Useform()

  return (
    <>
      {pokes.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </>
  )
}
