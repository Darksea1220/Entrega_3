const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

export const fetchFact = async () => {
  try {
    const response = await fetch(BASE_URL)

    if (!response.ok) {
      throw new Error('Error fetching data from API')
    }

    const data = await response.json()

    return data.fact
  } catch (error) {
    throw new Error(error)
  }
}
