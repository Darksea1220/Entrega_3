// // context/DashboardContext.jsx
// import React, { createContext, useState, useContext, useEffect } from 'react'
// import { useForm } from '../hook/useForm'
// import { HomePage } from '../components/Dashboard/HomePage'
// import { FilterBar } from '../components/Dashboard/FilterBar'
// import { PokemonCard } from '../components/Dashboard/PokemonCard'
// import { Loader } from '../components/Dashboard/Loader'

// const DashboardContext = createContext()

// export const useDashboardContext = () => {
//   return useContext(DashboardContext)
// }

// export const DashboardProvider = ({ children }) => {
//   const [allPokemons, setAllPokemons] = useState([])
//   const [globalPokemons, setGlobalPokemons] = useState([])
//   const [offset, setOffset] = useState(0)
//   const { valueSearch, onInputChange, onResetForm } = useForm({
//     valueSearch: ''
//   })
//   const [loading, setLoading] = useState(true)
//   const [active, setActive] = useState(false)
//   const [typeSelected, setTypeSelected] = useState({
//     grass: false,
//     normal: false
//     // ...otros tipos
//   })
//   const [filteredPokemons, setFilteredPokemons] = useState([])

//   const getAllPokemons = async (limit = 50) => {
//     // ... código existente para obtener todos los Pokémon
//   }

//   const getGlobalPokemons = async () => {
//     // ... código existente para obtener todos los Pokémon globales
//   }

//   const getPokemonByID = async (id) => {
//     // ... código existente para obtener un Pokémon por ID
//   }

//   const onClickLoadMore = () => {
//     setOffset(offset + 50)
//   }

//   const handleCheckbox = (e) => {
//     // ... código existente para manejar los cambios de los checkboxes
//   }

//   useEffect(() => {
//     getAllPokemons()
//   }, [offset])

//   useEffect(() => {
//     getGlobalPokemons()
//   }, [])

//   const contextValue = {
//     valueSearch,
//     onInputChange,
//     onResetForm,
//     allPokemons,
//     globalPokemons,
//     getPokemonByID,
//     onClickLoadMore,
//     loading,
//     setLoading,
//     active,
//     setActive,
//     handleCheckbox,
//     filteredPokemons
//   }

//   return (
//     <DashboardContext.Provider value={contextValue}>
//       {children}
//     </DashboardContext.Provider>
//   )
// }
