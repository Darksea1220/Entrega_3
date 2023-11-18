import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginPage } from './aut/pages'
import { DetailPage, PageNotFound, HomePage } from './dashboard/pages'

export function AppRouter () {
  return (
    <main>
      <Routes>
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/Dashboard'
          element={<HomePage />}
        />
        <Route
          path='/detail'
          element={<DetailPage />}
        />
        <Route
          path='/*'
          element={<PageNotFound />}
        />
        <Route index element={<Navigate to='/login' />} />
      </Routes>
    </main>
  )
}
