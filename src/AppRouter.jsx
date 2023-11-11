import { Routes, Route } from 'react-router-dom'
import { LoginPage } from './aut/pages'
import { DetailPage, PageNotFound } from './dashboard/pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/detail'
          element={<DetailPage />}
        />
        <Route
          path='/*'
          element={<PageNotFound />}
        />
      </Routes>
    </main>
  )
}
