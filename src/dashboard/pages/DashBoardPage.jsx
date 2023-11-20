import { Useform } from '../Hooks/Useform'
import { FilterBar, Loader, PokemonCard, List } from '../components/index'

export function DashBoardPage () {
  const { isLoading } = Useform()

  if (isLoading) {
    return (
      <>
        <FilterBar />
        <PokemonCard />
        <Loader />
      </>
    )
  }

  return (
    <>
      <FilterBar />
      <div className='pokes-container'>
        <List />
      </div>
    </>
  )
}
