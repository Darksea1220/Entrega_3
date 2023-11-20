import React from 'react'
import { AppRouter } from './AppRouter'
import { AuthContextProvider } from './aut/context/AuthContextProvider'

function App () {
  return (
    <>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </>
  )
}

export default App
