const API_ENDPOINT = 'https://pokeapi.co/api/v2/pokemon'

export function getApiUrl (queryParams) {
  if (!queryParams) { return API_ENDPOINT }

  return `${API_ENDPOINT}?${queryParams}`
}
